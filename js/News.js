export class News {
    //Constructor
    constructor(img, title, subtitle) {
        this.img = img;
        this.title = title;
        this.subtitle = subtitle;
    }

    //Getters y Setters:
    getImg() {
        return this.img;
    }
    setImg(img) {
        this.img = img;
    }

    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }

    getSubtitle() {
        return this.subtitle;
    }
    setSubtitle(subtitle) {
        this.subtitle = subtitle;
    }



}

