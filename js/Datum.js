export class Datum {
    //Constructor
    constructor(value, date) {
        this.value = value;
        this.date = date;
    }

    //Getters y Setters:
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }

    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }

}

