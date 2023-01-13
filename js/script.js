import { Company } from "./Company.js"
import { News } from "./News.js"
import { Stock } from "./Stock.js"


//*TODO: funciones y cosas:
let cards = document.getElementById("cards")

//
const rapidApiKey = "#"

let myPortfolio = []
let searchPerformanceIds = ""
let companies = []
let showMyPortfolio = false

let millisceondsDay = 24 * 60 * 60 * 1000
let beforeYesterday = new Date(new Date() - millisceondsDay * 2).toISOString().split("T")[0]

//Guardo los ids que tengo guardado en mi cartera a través del local storage
const getMyPortfolioCompanies = () => {
    if (localStorage.getItem("myPortfolio")) {//Si tiene alguna empresa guardada en localStorage la guardo en companies
        myPortfolio = JSON.parse(localStorage.getItem("myPortfolio"))
    }
    if (showMyPortfolio) {//Si pulsa en mostrar portfolio saco los ids guardados para volver a hacer la petición y que los datos sean actualizados
        myPortfolio.map(company => {
            searchPerformanceIds += company.id
            if (company !== companies[companies.length]) {//Concateno todos los ids menos el último
                searchPerformanceIds += "%2C"
            }
        })
    }
}

const addCompanyToMyPortfolio = (companyToAdd) => {
    if (localStorage.getItem("myPortfolio")) {//Si existe el localStorage de myPortfolio
        myPortfolio = JSON.parse(localStorage.getItem("myPortfolio"))
    }
    myPortfolio.push(companyToAdd)
    localStorage.setItem("myPortfolio", JSON.stringify(myPortfolio))
}

const removeCompanyToMyPortfolio = (companyToRemove) => {
    myPortfolio = JSON.parse(localStorage.getItem("myPortfolio"))
    console.log(myPortfolio)
    myPortfolio.map((company, index) => {
        console.log(company, index)
        if (companyToRemove.id == company.id) {
            console.log("borra")
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


/*
* 
* @param {$method} method 
* @param {*} rapidApiKey 
* @param {*} rapidApiHost 
* @param {*} fetchUrl 
* @returns : devuelve el resultado de la petición a rapidApi
*/
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




const apiRequests = async () => {
    if (!showMyPortfolio) {//Si busca alguna acción
        //Guardamos la información de la empresa:
        let companyInfo = await rapidApiReturn("GET", "ms-finance.p.rapidapi.com", "https://ms-finance.p.rapidapi.com/market/auto-complete?query=tesla");
        saveCompanyInfo(companyInfo[0])//Muestro el primer resultado, ya que los demás suelen no tener datos de cotización y provocan que la petición no devuelva ningún dato
    }
    //Guardamos la cotización de las acciones
    let companiesStock = await rapidApiReturn("GET", "ms-finance.p.rapidapi.com", `https://ms-finance.p.rapidapi.com/stock/get-histories?PerformanceId=${searchPerformanceIds}`);
    saveCompanyStock(companiesStock)
}




const appendChildFunction = (father, arraySons) => {
    arraySons.map(son => {
        father.appendChild(son)
    })
}


const generateChartJs = (canvas, values) => {
    const config = {
        type: "line",
        data: {
            labels: values[1],
            datasets: [
                {
                    label: "USD $",
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
    new Chart(canvas, config)
}



const takeDataforGraphic = (company, dataSetOption = "trimester") => {
    let values = []
    let labels = []
    if (dataSetOption == "trimester") {
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
    cardCanvas.setAttribute("WIDTH", "500")
    cardCanvas.setAttribute("HEIGHT", "250")
    let ctx = cardCanvas.getContext("2d")
    //canvasContainer.innerHTML = `<canvas class="card__canvas" id="canvas${company.id}" width="500" height="250"></canvas>`
    generateChartJs(ctx, takeDataforGraphic(company))
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
            //Mostramos el contenido del botón según los datos disponibles que tenga la acción
            let textContentCardButton = stockDataSet == "day" ? "1D" : stockDataSet == "trimester" ? "3M" : stockDataSet == "year" ? "1Y" : stockDataSet == "lustrum" ? "5Y" : "MAX"
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
    appendChildFunction(cardHeader, [cardIcon, cardId, cardTitle, cardGraphic])
    return cardHeader
}

const generateCard = (company) => {
    let card = document.createElement("div")
    card.classList.add("card")
    appendChildFunction(card, [generateCardHeader(company), generateCardMain(company)])
    return card
}




const generateGraphicCards = () => {
    let fragmentCards = document.createDocumentFragment()
    companies.map(company => {//Para cada empresa creo su tarjeta
        if (company.stock) {//Solo muestro los resultados de las empresas que tengan datos de cotizaciones 
            fragmentCards.appendChild(generateCard(company))
        }
    })
    cards.appendChild(fragmentCards)
}




const handleClick = (ev) => {
    let btn = ev.target
    if (btn.id == "addMyPortfolio") {//Si pulsa sobre el botón de favoritos
        btn.classList.toggle("card__icon--fav")//Coloreamos el botón
        //Guardamos el nombre de la empresa que hemos pulsado
        let performanceId = btn.nextElementSibling.textContent
        //Guardo el objeto completo de la empresa seleccionada:
        let companySelected
        companies.map(company => {
            if (company.id == performanceId) {
                companySelected = company
            }
        })
        if (btn.classList.contains("card__icon--fav")) {//añado la empresa a mi portfolio
            addCompanyToMyPortfolio(companySelected)
        } else {//quito la empresa de mi portfolio
            removeCompanyToMyPortfolio(companySelected)
            //Elimino la tarjeta
            btn.parentElement.parentElement.remove()
        }
    }
}


const loadControler = async () => {
    getMyPortfolioCompanies()
    await apiRequests()
    generateGraphicCards()
}



//***LISTENERS */
document.addEventListener("click", handleClick)
document.addEventListener("DOMContentLoaded", loadControler)
