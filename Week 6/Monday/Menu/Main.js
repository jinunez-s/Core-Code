var MenuElement = /** @class */ (function () {
    function MenuElement(id, name, price, emoji) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.emoji = emoji;
    }
    //Methods
    MenuElement.prototype.soup = function () {
        var array = {
            "Wonton Soup": 2.25,
            "Chiken Corn Soup": 1.95,
            "Vegetable Corn Soup": 2.25
        };
        return array;
    };
    return MenuElement;
}());
var soup = new MenuElement("01", "Sopa", 2.25, "e");
document.write(soup["Wonton Soup"]);
console.log(soup.soup());
console.log("Holissssssssssssss");
