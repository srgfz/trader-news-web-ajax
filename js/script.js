
//Importo las clases que voy a usar
import { Company } from "./Company.js"
import { Stock } from "./Stock.js"

//Variables a utilizar de manera global:
let cards = document.getElementById("cards")
let searchBtn = document.getElementById("searchBtn")
let searchInput = document.getElementById("searchInput")
let main = document.getElementById("main")
export let spinner = document.getElementById("spinner")
let localStorageLimitMessage = document.getElementById("localStorageLimitMessage")

const rapidApiKey = "1cce41d77dmshc35f7e99aa9ad13p1b2d79jsne3d15e66406e"

let graphicHeight = 350
let graphicWidth = 600
let graphics = []

let myPortfolio = []
let companies = []

let searchPerformanceIds = ""
let companyName = ""
let actionInProgress = false//Para controlar solo se pueda realizar una acción simultanea y no varias durante el tiempo de carga

let showMyPortfolio = true//Por defecto se mostrará la cartera

//*Función para guardar las empresas y los ids que tengo guardado en mi cartera a través del local storage
const getMyPortfolioCompanies = (portfolioOption = showMyPortfolio) => {
    let myPortfolioSaved = []
    if (localStorage.getItem("myPortfolio")) {//Si tiene alguna empresa guardada en localStorage la guardo en companies
        myPortfolioSaved = JSON.parse(localStorage.getItem("myPortfolio"))
    }
    if (portfolioOption) {//Si pulsa en mostrar portfolio saco los ids guardados para volver a hacer la petición y que los datos sean actualizados
        myPortfolioSaved.map((company, index) => {
            searchPerformanceIds += company.id
            if ((index + 1) !== myPortfolioSaved.length) {//Concateno todos los ids menos el último
                searchPerformanceIds += "%2C"
            }
        })
    }
    return myPortfolioSaved
}

//*Función encargada de añadir un objeto empresa con sus respectivas cotizaciones al localStorage: añadir a mi portfolio
const addCompanyToMyPortfolio = (btn, companyToAdd) => {
    if (localStorage.getItem("myPortfolio")) {//Si existe el localStorage de myPortfolio
        myPortfolio = JSON.parse(localStorage.getItem("myPortfolio"))
    }
    if (myPortfolio.length < 5) {//Solo puede añadir 5 empresas a su cartera
        myPortfolio.push(companyToAdd)
        localStorage.setItem("myPortfolio", JSON.stringify(myPortfolio))
    } else {//Si ya tiene 5 empresas guardadas
        btn.classList.remove("card__icon--fav")//
        localStorageLimitMessage.classList.remove("displayNone")
        localStorageLimitMessage.classList.add("animationMessageMyPortfolioLimit", "displayBlock")
    }
}

//*Función para eliminar una empresa del portfolio: eliminar de localStorage
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

//*Función que comnprueba si un id de una empresa se encuentra en el portfolio
const checkMyPortfolio = (id) => {
    let fav = false
    myPortfolio.map(company => {
        if (company.id == id) {
            fav = true
        }
    })
    return fav
}

//*Función para instanciar objetos Company(información acerca de la empresa) y añadirlos al array companies
const saveCompanyInfo = (company) => {
    companies.push(new Company(company.PerformanceId, company.Name, company.Exchange, company.ExchangeShortName, company.Sector, company.Industry, company.Currency))
    //Voy guardo el id de la empresa que ha buscado
    searchPerformanceIds = company.PerformanceId
}

//*Función para instanciar objetos Stock(información acerca de la empresa) y añadirlos a su objeto correspondiente:
//En esta función también se tratan y se limpian los datos devueltos por la api para mostrarlos posteriormente en el gráfico de forma adecuada
const saveCompanyStock = (data) => {
    data.map(companyData => {
        companies.map(company => {
            if (companyData.RequestKey == company.id) {//Añado cada cotización a su respectivo objeto Company
                //La cotización de 1D la saco a través de la trimestral, ya que dependiendo de la hora de la consulta es posible que devuelva ["1D"] vacío
                //Filtro los datos ya que me devuelve también en todos los registros los datos del último día de cotización por intervalos de 1min
                //Para los días lo filtro por intervalos de 5 minutos, ya que si no el gráfico tiene demasiados datos y no se aprecia bien la línea:
                let dayData = companyData["3M"].filter(stock => stock.DateTime.split("T")[1] != "00:00:00Z" && (stock.DateTime.split("T")[1].split(":")[1] % 5 == 0))
                //Para el año filtro los datos semanalmente
                let yearData = companyData["1Y"].filter((stock, index) => stock.DateTime.split("T")[1] == "00:00:00Z" && (index % 5 == 0))
                //Para Max lo filtro cada 3 meses
                let maxData = companyData["MAX"].filter((stock, index) => stock.DateTime.split("T")[1] == "00:00:00Z" && (index % 4 == 0))
                company.setStock(new Stock(dayData, companyData["3M"].filter(stock => stock.DateTime.split("T")[1] == "00:00:00Z"), yearData, companyData["5Y"].filter(stock => stock.DateTime.split("T")[1] == "00:00:00Z"), maxData))
            }
        })
    })
}

//*Función que actualiza los datos de la cotización 1D de las empresas que están en mi portfolio (Los demás datos como son más a largo plazo no veo necesarios actualizarlos)
const updateCompanyStock = (data) => {
    data.map(companyData => {
        myPortfolio.map(company => {
            if (companyData.RequestKey == company.id) {//Actualizo el registro que corresponda solamente para la cotización de 1D
                if (company.stock["day"]) {
                    company.stock["day"] = companyData["3M"].filter(stock => stock.DateTime.split("T")[1] != "00:00:00Z" && (stock.DateTime.split("T")[1].split(":")[1] % 5 == 0))
                }
            }
        })
    })
}

//*Función que devuelve el fetch a una api a partir de su método, su host, la url y la apiKey (función para cualquier api de rapidApi)
export const rapidApiReturn = async (method, rapidApiHost, fetchUrl, apiKey = rapidApiKey) => {
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

//*Función para imprimir un mensaje si mi portfolio está vacío
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

//*Función para imprimir un mensaje si no se han encontrado datos para una búsqueda
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

//*Función del comportamiento principal de la página, en la que se realizan las consultas a las apis y se controlan las acciones posteriores
const apiRequests = async () => {
    actionInProgress = true
    //Muestro el spinner de carga
    spinner.classList.add("displayBlock")
    spinner.classList.remove("displayNone")
    let dataAvailable = true
    if (!showMyPortfolio) {//Si busca alguna acción
        //Guardamos la información de la empresa:
        let companyInfo = await rapidApiReturn("GET", "ms-finance.p.rapidapi.com", `https://ms-finance.p.rapidapi.com/market/auto-complete?query=${companyName}`);
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
    actionInProgress = false
}



///*Función para incluir un array de hijos a su contenedor padre
export const appendChildFunction = (father, arraySons) => {
    arraySons.map(son => {
        father.appendChild(son)
    })
}

//*Función para generar los gráficos Chart.js a partir del canvas donde imprimir dicho gráfico, los valores[datos, etiquetas] y la moneda de la que se trata
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
    //Para poder sobreescribir el gráfico primero tengo que estruir el ya existente
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


//*Función que filtra los datos de las cotizaciones según la opción elegida para posteriormente mostrarlos en el gráfico (por defecto se mostrarán los datos para un año)
const takeDataforGraphic = (company, dataSetOption = "year") => {
    let values = []
    let labels = []
    if (dataSetOption == "day") {
        company.stock.day.map(companyStock => {
            values.push(companyStock.Price)
            labels.push(companyStock.DateTime)
        })
    } else if (dataSetOption == "trimester") {
        company.stock.trimester.map(companyStock => {
            values.push(companyStock.Price)
            labels.push(companyStock.DateTime)
        })
    } else if (dataSetOption == "year") {
        company.stock.year.map(companyStock => {
            values.push(companyStock.Price)
            labels.push(companyStock.DateTime)
        })
    } else if (dataSetOption == "lustrum") {
        company.stock.lustrum.map(companyStock => {
            values.push(companyStock.Price)
            labels.push(companyStock.DateTime)
        })
    } else {
        company.stock.max.map(companyStock => {
            values.push(companyStock.Price)
            labels.push(companyStock.DateTime)
        })
    }
    return [values, labels]
}


//*Función para generar los elementos html del gráfico. En ella se llama a la función para generar el Chart.js
const generateGraphic = (company) => {
    //Creo la etiqueta canvas con innerHTML ya que creandola con createElement me da error
    let cardCanvas = document.createElement("CANVAS")
    cardCanvas.classList.add("card__canvas")
    cardCanvas.setAttribute("ID", `canvas${company.name}`)
    cardCanvas.setAttribute("WIDTH", graphicWidth)
    cardCanvas.setAttribute("HEIGHT", graphicHeight)
    generateChartJs(cardCanvas, takeDataforGraphic(company), company.currency)
    return cardCanvas
}

//*Función para generar los elementos html de la distinta información referente a la empresa
const generateCardCompanyInfoList = (company) => {
    let cardList = document.createElement("UL")
    cardList.classList.add("card__list")
    let cardItemMarket = document.createElement("LI")
    cardItemMarket.classList.add("card__item")
    let cardItemSector = document.createElement("LI")
    cardItemSector.classList.add("card__item")
    let cardItemIndustry = document.createElement("LI")
    cardItemIndustry.classList.add("card__item")
    //Mercado de la empresa
    let marketTitle = document.createElement("DIV")
    marketTitle.classList.add("item__title")
    marketTitle.textContent = "Exchange"
    let marketContent = document.createElement("DIV")
    marketContent.textContent = `${company.exchange} (${company.exchangeShortName})`
    appendChildFunction(cardItemMarket, [marketTitle, marketContent])
    //Sector de la empresa
    let sectorTitle = document.createElement("DIV")
    sectorTitle.classList.add("item__title")
    sectorTitle.textContent = "Sector"
    let sectorContent = document.createElement("DIV")
    sectorContent.textContent = company.sector
    appendChildFunction(cardItemSector, [sectorTitle, sectorContent])
    //Industria de la empresa
    let industryTitle = document.createElement("DIV")
    industryTitle.classList.add("item__title")
    industryTitle.textContent = "Industry"
    let industryContent = document.createElement("DIV")
    industryContent.textContent = company.industry
    appendChildFunction(cardItemIndustry, [industryTitle, industryContent])
    appendChildFunction(cardList, [cardItemMarket, cardItemSector, cardItemIndustry])
    return cardList
}

//*Función índice para generar el main de las tarjetas de las cotizaciones de una empresa
const generateCardMain = (company) => {
    let cardMain = document.createElement("DIV")
    cardMain.classList.add("card__main")
    cardMain.appendChild(generateCardCompanyInfoList(company))
    return cardMain
}

//*Función para generar los botones de las distintas opciones de gráficos disponibles dentro de una tarjeta
const generateButtons = (company) => {
    let cardButtons = document.createElement("UL")
    cardButtons.classList.add("card__buttons")
    for (const stockDataSet in company.stock) {
        if (company.stock[stockDataSet].length > 1) {//Si el set de datos tiene datos muestro los botones para dicho set
            let cardButton = document.createElement("LI")
            cardButton.classList.add("card__button")
            if (stockDataSet == "year") {//Coloreo por defecto el botón de 1Y
                cardButton.classList.add("card__button--active")
            }
            //Mostramos el contenido del botón según los datos disponibles que tenga la acción
            let textContentCardButton = stockDataSet == "day" ? "1D" : stockDataSet == "trimester" ? "3M" : stockDataSet == "year" ? "1Y" : stockDataSet == "lustrum" ? "5Y" : "MAX"
            cardButton.textContent = textContentCardButton
            //añado los botones al padre
            cardButtons.appendChild(cardButton)
        }
    }
    return cardButtons
}

//*Función para generara el header de una tarjeta de cotizacion:
const generateCardHeader = (company) => {
    let cardHeader = document.createElement("DIV")
    cardHeader.classList.add("card__header")
    let cardIcon = document.createElement("I")
    cardIcon.setAttribute("ID", "addMyPortfolio")
    cardIcon.classList.add("bi", "bi-star-fill", "card__icon")
    if (checkMyPortfolio(company.id)) {//Si la  empresa está en mi portfolio marco el botón
        cardIcon.classList.add("card__icon--fav")
    }
    //Nombre de la empresa
    let cardId = document.createElement("div")
    cardId.classList.add("displayNone")//Guardo el id de la empresa oculto en la tarjeta
    cardId.textContent = company.id
    let cardTitle = document.createElement("H2")
    let cardLink = document.createElement("A")
    cardLink.classList.add("card__link")
    cardLink.textContent = company.name
    cardLink.setAttribute("HREF", "#")
    cardTitle.appendChild(cardLink)
    cardTitle.classList.add("card__title")
    //Gráfico:
    let cardGraphic = document.createElement("DIV")
    cardGraphic.classList.add("card__graphic")
    //Generamos el gráfico en canvas con chart.js u los botónes de los set de datos de las distintas cotizaciones y los añadimos a su contenedor
    appendChildFunction(cardGraphic, [generateGraphic(company), generateButtons(company)])
    appendChildFunction(cardHeader, [cardId, cardIcon, cardTitle, cardGraphic])//El id será el primer elemento del header y estará oculto
    return cardHeader
}

//*Función índice para generar las tarjetas de cotización de una empresa, devuelve la tarjeta con todos sus elementos en ella
const generateCard = (company) => {
    let card = document.createElement("ARTICLE")
    card.classList.add("card")
    appendChildFunction(card, [generateCardHeader(company), generateCardMain(company)])
    return card
}

//*Función para añadir topdas las tarjetas de los resultados a la página
const generateGraphicCards = (companiesToPrint = companies) => {
    let fragmentCards = document.createDocumentFragment()
    //Título del main:
    let mainTitle = document.createElement("H2")
    mainTitle.classList.add("main__title")
    mainTitle.textContent = showMyPortfolio ? "Mi Cartera" : `Resultados de "${companyName.replace("%20", " ")}"`
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

//*Función de pulsar sobre el botón de favoritos
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
            btn.parentElement.parentElement.classList.add("animationRemoveElement")//Animación de quitar la empresa
            setTimeout(() => {
                btn.parentElement.parentElement.remove()
                //Si al eliminarla no tengo ninguna guardaa muestro un mensaje:
                if (!JSON.parse(localStorage.getItem("myPortfolio")).length) {
                    printMyPortfolioEmpty()
                    //Borro el elemento de localStorage
                    localStorage.removeItem("myPortfolio")
                }
            }, 800)
        } else {
            localStorage.removeItem("myPortfolio")
        }
    }
}

//*Función respectiva a pulsar sobre algún botón del gráfico
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

//*Función para controlar el botón de búsqueda del input search del nav
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
    loadControlerIndex()
}

//*Controlador general de clicks
const handleClick = (ev) => {
    let btn = ev.target
    if (btn.classList.contains("card__icon") && !actionInProgress) {//Si pulsa sobre el botón de favoritos
        actionFavButton(btn)
    } else if (btn.classList.contains("card__button") && !btn.classList.contains("card__button--active") && !actionInProgress) {//Si pulsa sobre algún botón de las cotizaciones históricas y no está pulsado ya
        actionGraphicButtons(btn)
    } else if ((btn == searchBtn || btn == searchBtn.children[0]) && searchInput.value.trim() !== "" && !actionInProgress) {//Si realiza una búsqueda y no está vacío el input
        actionSearchButton()
    } else if (btn.classList.contains("card__link") && !actionInProgress) {
        let id = btn.parentElement.parentElement.children[0].textContent
        let companySelected
        //Guardo la empresa que he seleccionado en el localStorage para mostrar sus datos en la otra página
        if (showMyPortfolio) {
            myPortfolio.map(company => {
                if (company.id == id) {
                    companySelected = company
                }
            })
        } else {
            companySelected = companies[0]
        }
        localStorage.setItem("cardSelected", JSON.stringify(companySelected))
    }
}

//*Función al cargar la página
const loadControlerIndex = async () => {
    myPortfolio = getMyPortfolioCompanies()
    await apiRequests()
    showMyPortfolio ? generateGraphicCards(myPortfolio) : generateGraphicCards()//Dependiendo de si busca o lista su cartera paso un parámetro o el parámetro por defecto companies
}


//***LISTENERS */
document.addEventListener("click", handleClick)
searchInput.addEventListener("keydown", (ev) => {//Para que realize la búsqueda al hacer intro en el inputSearch
    if (ev.key == "Enter" && searchInput.value.trim() !== "" && !actionInProgress) {
        actionSearchButton()
    }
})

localStorageLimitMessage.addEventListener("animationend", () => {
    localStorageLimitMessage.classList.add("displayNone")
    localStorageLimitMessage.classList.remove("animationMessageMyPortfolioLimit", "displayBlock")
})
//Compruebo si cargo desde la propia página o si ha usado el buscador desde news.html:
if (window.location.href.split("/")[window.location.href.split("/").length - 1] == "index.html") {
    document.addEventListener("DOMContentLoaded", loadControlerIndex)
} else if (window.location.href.includes("?")) {//Si viene desde el buscador de noticias
    showMyPortfolio = false
    companyName = window.location.href.split("?")[1].split("=")[1]
    loadControlerIndex()
}

