//Pongo ?# para que el usuario pueda usar el buscador del nav desde la primera carga
location.href = './index.html?#';


import { Company } from "./Company.js"
import { News } from "./News.js"
import { Stock } from "./Stock.js"


let cards = document.getElementById("cards")
let searchBtn = document.getElementById("searchBtn")
let searchInput = document.getElementById("searchInput")
let main = document.getElementById("main")
let spinner = document.getElementById("spinner")
let localStorageLimitMessage = document.getElementById("localStorageLimitMessage")

//
const rapidApiKey = "#"

let graphicHeight = 350
let graphicWidth = 600
let graphics = []

let myPortfolio = []
let companies = []

let searchPerformanceIds = ""
let companyName = ""

let showMyPortfolio = true//Por defecto se mostrará la cartera

let millisceondsDay = 24 * 60 * 60 * 1000
let beforeYesterday = new Date(new Date() - millisceondsDay * 2).toISOString().split("T")[0]

//Guardo los ids que tengo guardado en mi cartera a través del local storage
const getMyPortfolioCompanies = () => {
    if (localStorage.getItem("myPortfolio")) {//Si tiene alguna empresa guardada en localStorage la guardo en companies
        myPortfolio = JSON.parse(localStorage.getItem("myPortfolio"))
    }
    if (showMyPortfolio) {//Si pulsa en mostrar portfolio saco los ids guardados para volver a hacer la petición y que los datos sean actualizados
        myPortfolio.map((company, index) => {
            searchPerformanceIds += company.id
            if ((index + 1) !== myPortfolio.length) {//Concateno todos los ids menos el último
                searchPerformanceIds += "%2C"
            }
        })
    }
}

const addCompanyToMyPortfolio = (btn, companyToAdd) => {
    if (localStorage.getItem("myPortfolio")) {//Si existe el localStorage de myPortfolio
        myPortfolio = JSON.parse(localStorage.getItem("myPortfolio"))
    }
    if (myPortfolio.length < 5) {//Solo puede añadir 5 empresas a su cartera
        myPortfolio.push(companyToAdd)
        localStorage.setItem("myPortfolio", JSON.stringify(myPortfolio))
    } else {//Si ya tiene 5 empresas guardadas
        console.log("aser")
        btn.classList.remove("card__icon--fav")//
        localStorageLimitMessage.classList.remove("displayNone")
        localStorageLimitMessage.classList.add("animationMessageMyPortfolioLimit", "displayBlock")
        setTimeout(() => {
            localStorageLimitMessage.classList.add("displayNone")
            localStorageLimitMessage.classList.remove("animationMessageMyPortfolioLimit", "displayBlock")
        }, 4000)
    }
}

const removeCompanyToMyPortfolio = (companyToRemove) => {
    myPortfolio = JSON.parse(localStorage.getItem("myPortfolio"))
    myPortfolio.map((company, index) => {
        if (companyToRemove.id == company.id) {
            myPortfolio.splice(index, 1)
        }
    })
    //Añado a localStorage
    localStorage.setItem("myPortfolio", JSON.stringify(myPortfolio))
}

const checkMyPortfolio = (id) => {
    let fav = false
    myPortfolio.map(company => {
        if (company.id == id) {
            fav = true
        }
    })
    return fav
}

const saveCompanyInfo = (company) => {
    companies.push(new Company(company.PerformanceId, company.Name, company.Exchange, company.ExchangeShortName, company.Sector, company.Industry, company.Currency))
    //Voy guardo el id de la empresa que ha buscado
    searchPerformanceIds = company.PerformanceId
}




const saveCompanyStock = (data) => {
    data.map(companyData => {
        companies.map(company => {
            if (companyData.RequestKey == company.id) {//Añado cada cotización a su respectivo objeto Company
                company.setStock(new Stock(companyData["1D"], companyData["3M"], companyData["1Y"], companyData["5Y"], companyData["MAX"]))
            }
        })
    })
}

const updateCompanyStock = (data) => {
    data.map(companyData => {
        myPortfolio.map(company => {
            if (companyData.RequestKey == company.id) {//Actualizo el registro que corresponda
                company["day"] = companyData["1D"]
                company["trimester"] = companyData["3M"]
                company["year"] = companyData["1Y"]
                company["lustrum"] = companyData["5Y"]
                company["max"] = companyData["MAX"]
            }
        })
    })
}


const rapidApiReturn = async (method, rapidApiHost, fetchUrl, apiKey = rapidApiKey) => {
    const options = {
        method: method,
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': rapidApiHost
        }
    };

    return fetch(fetchUrl, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.error(err));
}

const printMyPortfolioEmpty = () => {
    while (cards.children[0]) {//Borro los elementos que puedan haber en cards
        cards.children[0].remove()
    }
    //Muestro el mensaje
    let notFoundMessage = document.createElement("P")
    notFoundMessage.classList.add("cards__message")
    notFoundMessage.textContent = "- - Todavía no tiene ninguna acción guardada en su cartera, use el buscador si desea añadir alguna - -"
    cards.appendChild(notFoundMessage)
}

const printNotFoundMessage = () => {
    while (cards.children[0]) {//Borro los elementos que puedan haber en cards
        cards.children[0].remove()
    }
    //Muestro el mensaje
    let notFoundMessage = document.createElement("P")
    notFoundMessage.classList.add("cards__message")
    notFoundMessage.textContent = "- - Actualmente no disponemos de ningún registro para la empresa solicitada, asegurese de que el nombre está correctamente escrito - -"
    cards.appendChild(notFoundMessage)
}

const apiRequests = async () => {
    //Muestro el spinner de carga
    spinner.classList.add("displayBlock")
    spinner.classList.remove("displayNone")


    let dataAvailable = true
    if (!showMyPortfolio) {//Si busca alguna acción
        //Guardamos la información de la empresa:
        let companyInfo = await rapidApiReturn("GET", "ms-finance.p.rapidapi.com", `https://ms-finance.p.rapidapi.com/market/auto-complete?query=${companyName}`);
        console.log(companyInfo)
        if (companyInfo[0]) {//Si la consulta devuelve al menos un resultado
            saveCompanyInfo(companyInfo[0])//Muestro el primer resultado, ya que los demás suelen no tener datos de cotización y provocan que la petición no devuelva ningún dato
        } else {//Si no hay resultados para la consulta
            dataAvailable = false
        }
    }
    //Guardamos la cotización de las acciones
    if (!showMyPortfolio || searchPerformanceIds) {//Si está buscando o hay datos guardados en myPortfolio
        if (dataAvailable) {//Si hay datos
            let companiesStock = await rapidApiReturn("GET", "ms-finance.p.rapidapi.com", `https://ms-finance.p.rapidapi.com/stock/get-histories?PerformanceId=${searchPerformanceIds}`);
            //Si es búsqueda seteo los datos, si es mi cartera los actualizo en caso de tener alguna acción guardada:
            showMyPortfolio ? updateCompanyStock(companiesStock) : saveCompanyStock(companiesStock)
        } else {//Si no hay datos muestro el mensaje avisando al usuario
            printNotFoundMessage()
        }
    } else {
        printMyPortfolioEmpty()
    }
    //Oculto el spinner de carga
    spinner.classList.remove("displayBlock")
    spinner.classList.add("displayNone")
}




const appendChildFunction = (father, arraySons) => {
    arraySons.map(son => {
        father.appendChild(son)
    })
}


const generateChartJs = (canvas, values, currency) => {
    const config = {
        type: "line",
        data: {
            labels: values[1],
            datasets: [
                {
                    label: currency,
                    backgroundColor: "rgb(0,0,0,0.5)",
                    borderColor: "rgb(245, 245, 245)",
                    data: values[0],
                    fill: true,
                }
            ]
        },
        options: {
            legend: {
                display: false,
                hidden: true,
            },
            scales: {
                y: {
                    grace: "40%",
                },
                x: {
                    display: false,
                }
            },
        }
    }
    //Destruyo el 
    if (graphics) {//Si tengo el gráfico lo destruyo para poder atualizarlo con los distintos datos de las series temporales
        //graphics[0].destroy()
        graphics.map((graphic, index) => {
            if (graphic[0] == canvas.id) {//Si cambio el gráfico a otra serie temporal destruyo el que había
                graphics.splice(index, 1)
                graphic[1].destroy()
            }
        })
    }
    graphics.push([canvas.id, new Chart(canvas.getContext("2d"), config)])
}



const takeDataforGraphic = (company, dataSetOption = "year") => {
    let values = []
    let labels = []
    if (dataSetOption == "day") {
        company.stock.trimester.map(companyStock => {
            if (companyStock.DateTime.split("T")[0] <= beforeYesterday) {//Si los datos son anteriores a 1D
                values.push(companyStock.Price)
                labels.push(companyStock.DateTime)
            }
        })
    } else if (dataSetOption == "trimester") {
        company.stock.trimester.map(companyStock => {
            if (companyStock.DateTime.split("T")[0] <= beforeYesterday) {//Si los datos son anteriores a 1D
                values.push(companyStock.Price)
                labels.push(companyStock.DateTime)
            }
        })
    } else if (dataSetOption == "year") {
        company.stock.year.map(companyStock => {
            if (companyStock.DateTime.split("T")[0] <= beforeYesterday) {//Si los datos son anteriores a 1D
                values.push(companyStock.Price)
                labels.push(companyStock.DateTime)
            }
        })
    } else if (dataSetOption == "lustrum") {
        company.stock.lustrum.map(companyStock => {
            if (companyStock.DateTime.split("T")[0] <= beforeYesterday) {//Si los datos son anteriores a 1D
                values.push(companyStock.Price)
                labels.push(companyStock.DateTime)
            }
        })
    } else {
        company.stock.max.map(companyStock => {
            if (companyStock.DateTime.split("T")[0] <= beforeYesterday) {//Si los datos son anteriores a 1D
                values.push(companyStock.Price)
                labels.push(companyStock.DateTime)
            }
        })
    }

    return [values, labels]
}

const generateGraphic = (company) => {
    //Creo la etiqueta canvas con innerHTML ya que creandola con createElement me da error
    let cardCanvas = document.createElement("CANVAS")
    cardCanvas.classList.add("card__canvas")
    cardCanvas.setAttribute("ID", `canvas${company.name}`)
    cardCanvas.setAttribute("WIDTH", graphicWidth)
    cardCanvas.setAttribute("HEIGHT", graphicHeight)
    //canvasContainer.innerHTML = `<canvas class="card__canvas" id="canvas${company.id}" width="500" height="250"></canvas>`
    generateChartJs(cardCanvas, takeDataforGraphic(company), company.currency)
    return cardCanvas
}






const generateCardCompanyInfoList = (company) => {
    let cardList = document.createElement("UL")
    cardList.classList.add("card__list")
    let cardItemMarket = document.createElement("LI")
    cardItemMarket.classList.add("card__item")
    let cardItemSector = document.createElement("LI")
    cardItemSector.classList.add("card__item")
    let cardItemIndustry = document.createElement("LI")
    cardItemIndustry.classList.add("card__item")

    let marketTitle = document.createElement("DIV")
    marketTitle.classList.add("item__title")
    marketTitle.textContent = "Mercado"
    let marketContent = document.createElement("DIV")
    marketContent.textContent = `${company.exchange} (${company.exchangeShortName})`
    appendChildFunction(cardItemMarket, [marketTitle, marketContent])


    let sectorTitle = document.createElement("DIV")
    sectorTitle.classList.add("item__title")
    sectorTitle.textContent = "Sector"
    let sectorContent = document.createElement("DIV")
    sectorContent.textContent = company.sector
    appendChildFunction(cardItemSector, [sectorTitle, sectorContent])

    let industryTitle = document.createElement("DIV")
    industryTitle.classList.add("item__title")
    industryTitle.textContent = "Industria"
    let industryContent = document.createElement("DIV")
    industryContent.textContent = company.industry
    appendChildFunction(cardItemIndustry, [industryTitle, industryContent])
    appendChildFunction(cardList, [cardItemMarket, cardItemSector, cardItemIndustry])
    return cardList
}


const generateCardMain = (company) => {
    let cardMain = document.createElement("DIV")
    cardMain.classList.add("card__main")

    cardMain.appendChild(generateCardCompanyInfoList(company))


    return cardMain
}

const generateButtons = (company) => {
    let cardButtons = document.createElement("UL")
    cardButtons.classList.add("card__buttons")
    for (const stockDataSet in company.stock) {
        if (company.stock[stockDataSet].length) {//Si el set de datos tiene datos muestro los botones para dicho set
            let cardButton = document.createElement("LI")
            cardButton.classList.add("card__button")
            if (stockDataSet == "year") {//Coloreo por defecto el botón de 1Y
                cardButton.classList.add("card__button--active")
            }
            //Mostramos el contenido del botón según los datos disponibles que tenga la acción
            let textContentCardButton = stockDataSet == "day" ? "MIN" : stockDataSet == "trimester" ? "3M" : stockDataSet == "year" ? "1Y" : stockDataSet == "lustrum" ? "5Y" : "MAX"
            cardButton.textContent = textContentCardButton
            //añado los botones al padre
            cardButtons.appendChild(cardButton)
        }
    }
    return cardButtons
}




const generateCardHeader = (company) => {
    let cardHeader = document.createElement("DIV")
    cardHeader.classList.add("card__header")
    let cardIcon = document.createElement("I")
    cardIcon.setAttribute("ID", "addMyPortfolio")
    cardIcon.classList.add("bi", "bi-star-fill", "card__icon")
    if (checkMyPortfolio(company.id)) {//Si la  empresa está en mi portfolio marco el botón
        cardIcon.classList.add("card__icon--fav")
    }
    let cardId = document.createElement("div")
    cardId.classList.add("displayNone")//Guardo el id de la empresa oculto en la tarjeta
    cardId.textContent = company.id
    let cardTitle = document.createElement("H2")
    cardTitle.classList.add("card__title")
    cardTitle.textContent = company.name
    //Gráfico:
    let cardGraphic = document.createElement("DIV")
    cardGraphic.classList.add("card__graphic")
    //Generamos el gráfico en canvas con chart.js u los botónes de los set de datos de las distintas cotizaciones y los añadimos a su contenedor
    appendChildFunction(cardGraphic, [generateGraphic(company), generateButtons(company)])
    appendChildFunction(cardHeader, [cardId, cardIcon, cardTitle, cardGraphic])//El id será el primer elemento del header y estará oculto
    return cardHeader
}

const generateCard = (company) => {
    let card = document.createElement("div")
    card.classList.add("card")
    appendChildFunction(card, [generateCardHeader(company), generateCardMain(company)])
    return card
}




const generateGraphicCards = (companiesToPrint = companies) => {
    let fragmentCards = document.createDocumentFragment()
    //Título del main:
    let mainTitle = document.createElement("H2")
    mainTitle.classList.add("main__title")
    mainTitle.textContent = showMyPortfolio ? "Mi Cartera" : `Resutados de "${companyName}"`
    main.prepend(mainTitle)
    companiesToPrint.map(company => {//Para cada empresa creo su tarjeta
        if (company.stock) {//Solo muestro los resultados de las empresas que tengan datos de cotizaciones 
            fragmentCards.appendChild(generateCard(company))
        } else {//Si la empresa no tiene cotizaciones lo meustro en un mensaje
            printNotFoundMessage()
        }
    })
    cards.appendChild(fragmentCards)
}

const actionFavButton = (btn) => {
    btn.classList.toggle("card__icon--fav")//Coloreamos el botón
    //Guardamos el nombre de la empresa que hemos pulsado
    let performanceId = btn.previousElementSibling.textContent
    //Guardo el objeto completo de la empresa seleccionada:
    let companySelected
    let arrayCompanies = showMyPortfolio ? myPortfolio : companies
    arrayCompanies.map(company => {
        if (company.id == performanceId) {
            companySelected = company
        }
    })
    if (btn.classList.contains("card__icon--fav")) {//añado la empresa a mi portfolio
        addCompanyToMyPortfolio(btn, companySelected)
    } else {//quito la empresa de mi portfolio
        removeCompanyToMyPortfolio(companySelected)
        if (showMyPortfolio) {//Si la elimino desde mi portfolio la tarjeta desaparece, si es desde el buscador la tarjeta permanece
            //Si al eliminarla no tengo ninguna guardaa muestro un mensaje:
            if (!cards.children[0]) {
                printMyPortfolioEmpty()
            }
        }
        btn.parentElement.parentElement.classList.add("animationRemoveElement")//Animación de quitar la empresa
        setTimeout(() => btn.parentElement.parentElement.remove(), 800)
    }
}

const actionGraphicButtons = (btn) => {
    let btns = Array.from(btn.parentElement.querySelectorAll(".card__button"))//Guardo todos los botones de esa tarjeta
    let canvas = btn.parentElement.previousElementSibling//Guardamos el canvas correspondiente al elemento pulsado
    let companyId = btn.parentElement.parentElement.parentElement.children[0].textContent//Guardo el id de la tarjeta seleccionada
    btns.map(btn => {//Recorro los botones eliminando la clase active
        btn.classList.remove("card__button--active")
    })
    btn.classList.add("card__button--active")//Coloreo el botón seleccionado
    let dataSet = btn.textContent == "1D" ? "day" : btn.textContent == "3M" ? "trimester" : btn.textContent == "1Y" ? "year" : btn.textContent == "5Y" ? "lustrum" : "max"
    //Guardo la acción seleccionada
    if (showMyPortfolio) {
        myPortfolio.map(company => {
            if (company.id === companyId) {
                generateChartJs(canvas, takeDataforGraphic(company, dataSet), company.currency)
            }
        })
    } else {//Las búsquedas solo dan una acción
        generateChartJs(canvas, takeDataforGraphic(companies[0], dataSet), companies[0].currency)

    }
}


const actionSearchButton = () => {
    showMyPortfolio = false//Cambio la opción de mostrar mi cartera ya que se está realizando una búsqueda
    //Limpio el array de Companies
    companies = []
    //Borro el título
    main.children[0].remove()
    //Limpio el contenido de cards:
    while (cards.children[0]) {
        cards.children[0].remove()
    }
    companyName = searchInput.value.trim().toUpperCase()
    searchInput.textContent = ""//Limpio el input de buscar
    searchInput.value = ""
    searchInput.blur()//Quito el foco del inputSearch del nav para que no pueda realizar otra búsqueda mientras se está cargando una
    loadControler()


}


const handleClick = (ev) => {
    let btn = ev.target
    if (btn.classList.contains("card__icon")) {//Si pulsa sobre el botón de favoritos
        actionFavButton(btn)
    } else if (btn.classList.contains("card__button") && !btn.classList.contains("card__button--active")) {//Si pulsa sobre algún botón de las cotizaciones históricas y no está pulsado ya
        actionGraphicButtons(btn)
    } else if ((btn == searchBtn || btn == searchBtn.children[0]) && searchInput.value.trim() !== "") {//Si realiza una búsqueda y no está vacío el input
        actionSearchButton()
    }
}


const loadControler = async () => {
    getMyPortfolioCompanies()
    await apiRequests()
    showMyPortfolio ? generateGraphicCards(myPortfolio) : generateGraphicCards()//Dependiendo de si busca o lista su cartera paso un parámetro o el parámetro por defecto companies
}



//***LISTENERS */
document.addEventListener("click", handleClick)
searchBtn.addEventListener("submit", (ev) => ev.preventDefault());//Evito que lo envíe para poder usar el enter en el input y que no recargue la página

document.addEventListener("DOMContentLoaded", loadControler)
