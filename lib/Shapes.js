
class Shape {
    constructor(shape, textcolor, text, fontsize,backgroundcolor) {
        this.shape = shape;
        this.textcolor = textcolor;
        this.text = text;
        this.fontsize = fontsize;
        this.backgroundcolor=backgroundcolor;
    }

}

class Triangle extends Shape {
    constructor(shape,textcolor,text,fontsize,backgroundcolor){
        super(shape,textcolor,text,fontsize,backgroundcolor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} cx="150" cy="100" r="80" fill="${this.backgroundcolor}"/><text x="150" y="125" font-size="${this.fontsize}" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}

class Circle extends Shape {
    constructor(shape,textcolor,text,fontsize,backgroundcolor){
        super(shape,textcolor,text,fontsize,backgroundcolor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} cx="150" cy="100" r="80" fill="${this.backgroundcolor}"/><text x="150" y="125" font-size="${this.fontsize}" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}
class Square extends Shape {
    constructor(shape,textcolor,text,fontsize,backgroundcolor){
        super(shape,textcolor,text,fontsize,backgroundcolor)
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><${this.shape} cx="150" cy="100" r="80" fill="${this.backgroundcolor}"/><text x="150" y="125" font-size="${this.fontsize}" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
    }
}

module.exports = { Triangle, Square, Circle };