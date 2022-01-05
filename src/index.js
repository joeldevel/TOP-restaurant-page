import Home from './home.js';
import Contact from './contact.js';
import Menu from './menu.js';

// Home();
// Contact();
// Menu();

function content() {
  let home = Home();
  let contact = Contact();
  let menu = Menu();
  // return [menu, contact, home];

  document.querySelector("#tab-content").appendChild(contact);
  document.querySelector("#tab-content").appendChild(menu);
  document.querySelector("#tab-content").appendChild(home);

}

content();
