export class Stock {
    //Constructor
    constructor(company, data, news) {
        this.company = company;
        this.data = data;
        this.news = news;

    }

    //Getters y Setters:
    getCompany() {
        return this.company;
    }
    setCompany(company) {
        this.company = company;
    }

    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }

    getNews() {
        return this.news;
    }
    setNews(news) {
        this.news = news;
    }


}

