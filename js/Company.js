export class Company {
    //Constructor
    constructor(id, name, exchange, exchangeShortName, sector, industry, currency, stock, news) {
        this.id = id;
        this.name = name;
        this.exchange = exchange;
        this.exchangeShortName = exchangeShortName;
        this.sector = sector;
        this.industry = industry;
        this.currency = currency;
        this.stock = stock;
        this.news = news;
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

    getCurrency() {
        return this.currency;
    }
    setCurrency(currency) {
        this.currency = currency;
    }

    getStock() {
        return this.stock;
    }
    setStock(stock) {
        this.stock = stock;
    }

    getNews() {
        return this.news;
    }
    setNews(news) {
        this.news = news;
    }


}

