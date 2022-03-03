class MenuElement {
    id: string;
    name: string;
    price: number;
    emoji: string;

    constructor(id: string, name: string, price: number, emoji: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.emoji = emoji;
    }

    //Methods
    soup() {
        var array = {
            "Wonton Soup": 2.25,
            "Chiken Corn Soup": 1.95,
            "Vegetable Corn Soup": 2.25
        }
        return array;
    }

    //PrintOption


}
var soup = new MenuElement("01", "Sopa", 2.25, "e");
document.write(soup["Wonton Soup"]);
console.log(soup.soup());
console.log("Holissssssssssssss");
