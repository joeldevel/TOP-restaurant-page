export default function Nav() {
    console.log("from Nav with love");
    const nav = document.createElement('nav');

    const home = document.createElement('a');
    home.innerHTML = "home";
    home.title = "home";

    const menu = document.createElement('a');
    menu.innerHTML = "menu";
    menu.title = "menu";

    const contact = document.createElement('a');
    contact.innerHTML = "contact";
    contact.title = "contact";

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    let links = nav.querySelectorAll("a");
    for(let i=0; i<links.length; i++) {
        links[i].className = "tab-button";
    }
    return nav;
}
