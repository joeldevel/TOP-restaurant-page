export default function Menu() {

    console.log('I get called from home.js!');
    const element = document.createElement('div');
    element.className = "hidden";
    element.id = "menu";

    element.innerHTML = "Here some of our delicious antipasti";
    
    return element;
}
