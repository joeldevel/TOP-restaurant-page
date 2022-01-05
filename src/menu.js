export default function Menu() {

    console.log('I get called from home.js!');
    const element = document.createElement('div');
    element.className = "hidden";
    element.id = "menu";

    element.innerHTML = "Contact us at pepinos@restaurant.com";

    return element;
}
