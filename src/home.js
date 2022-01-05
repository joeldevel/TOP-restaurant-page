export default function Home() {
  // <div id="home" class="active-content">Pepino's is a traditional italian restaurant</div>

    console.log('I get called from home.js!');
    const element = document.createElement('div');
    element.className = "active-content";
    element.id = "home";
    element.innerHTML = "Pepino's is a traditional italian restaurant";

    return element;
}
