export default function Contact() {
  // <div id="menu" class="hidden"></div>

    console.log('I get called from home.js!');
    const element = document.createElement('div');
    element.className = "hidden";
    element.id = "contact";

    element.innerHTML = "Here some of our delicious antipasti";

    return element;
}
