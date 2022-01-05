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

  // grab all tabs content
  let tabsContent = document.querySelectorAll(".tab-content div");
  let tabButtons = document.querySelectorAll("nav a");
  // console.log(tabsContent);
  for(let i = 0; i < tabButtons.length; i++) {
      tabButtons[i].onclick = showTabContent;
  }

  function showTabContent(e) {
    console.log(this);
    //get which one to show
    let contentId = this.title;
    // hide all
    for(let i = 0; i < tabsContent.length; i++) {
        tabsContent[i].className = "hidden";
        if(tabsContent[i].id == contentId) {
            tabsContent[i].className = "active-content";
        }
    }
  }

}

content();
