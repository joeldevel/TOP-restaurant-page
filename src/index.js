import Nav from './nav.js';
import Header from './header.js';
import Home from './home.js';
import Contact from './contact.js';
import Menu from './menu.js';

function app() {
  // create elements
  let nav = Nav();
  let home = Home();
  let contact = Contact();
  let menu = Menu();
  let header = Header();

  // append them to document
  document.querySelector("#content").appendChild(header);
  document.querySelector("#content").prepend(nav);

  let tabContent = document.createElement('div');
  tabContent.className = "tab-content";
  tabContent.id = "tab-content";

  document.querySelector("#content").appendChild(tabContent);
  document.querySelector("#tab-content").appendChild(contact);
  document.querySelector("#tab-content").appendChild(menu);
  document.querySelector("#tab-content").appendChild(home);

  // Add functionality
  // grab all tabs content
  let tabsContent = document.querySelectorAll(".tab-content div");
  let tabButtons = document.querySelectorAll("nav a");
  for(let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].onclick = showTabContent;
  }

  function showTabContent(e) {
    //get which one to show
    let contentId = this.title;
    // hide all
    for(let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].className = "hidden";
        if(tabsContent[i].id == contentId) {
            // show the content
            tabsContent[i].className = "active-content";
        }
    }
  }

}

app();
