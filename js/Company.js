export class Company {
    //Constructor
    constructor(id, name, ticker, exchange, exchangeShortName, sector, industry, stock, news) {
        this.id = id;
        this.name = name;
        this.ticker = ticker;
        this.exchange = exchange;
        this.exchangeShortName = exchangeShortName;
        this.sector = sector;
        this.industry = industry;
    }

    //Getters y Setters:
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    getTicker() {
        return this.ticker;
    }
    setTicker(ticker) {
        this.ticker = ticker;
    }

    getExchange() {
        return this.exchange;
    }
    setExchange(exchange) {
        this.exchange = exchange;
    }

    getExchangeShortName() {
        return this.exchangeShortName;
    }
    setExchangeShortName(exchangeShortName) {
        this.exchangeShortName = exchangeShortName;
    }

    getSector() {
        return this.sector;
    }
    setSector(sector) {
        this.sector = sector;
    }

    getIndustry() {
        return this.industry;
    }
    setIndustry(industry) {
        this.industry = industry;
    }


}

