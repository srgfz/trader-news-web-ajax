export class Stock {
    //Constructor
    constructor(day, trimester, year, lustrum, max) {
        this.day = day
        this.trimester = trimester;
        this.year = year;
        this.lustrum = lustrum;
        this.max = max;
    }

    //Getters y Setters:
    getDay() {
        return this.day;
    }
    setDay(day) {
        this.day = day;
    }

    getTrimester() {
        return this.trimester;
    }
    setTrimester(trimester) {
        this.trimester = trimester;
    }

    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }

    getLustrum() {
        return this.lustrum;
    }
    setLustrum(lustrum) {
        this.lustrum = lustrum;
    }

    getMax() {
        return this.max;
    }
    setMax(max) {
        this.max = max;
    }




}

