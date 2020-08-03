

const menu = document.getElementsByClassName('menu-wrapp')[0];
const subMenu = document.getElementsByClassName('open-sub_menu');


function burgerMenu() {
    if(this.classList.contains('active')){
        this.classList.remove('active');
        menu.classList.remove('active');
    } else {
        this.classList.add('active');
        menu.classList.add('active');
    }
  };
 
  

  function showSubMenu() {
    
    
    let parent = this.parentNode;
    if(this.classList.contains('active')){
        this.classList.remove('active');
        if (parent.getElementsByClassName('sub_menu')[0] != null ) {
            parent.getElementsByClassName('sub_menu')[0].classList.remove('active');
        } else {
            parent.getElementsByClassName('third-sub_menu')[0].classList.remove('active');
        }
        
    } else {
        this.scrollIntoView();
        if (parent.getElementsByClassName('sub_menu')[0] != null ) {

            Array.from(document.querySelectorAll('.open-sub_menu')).forEach(item => {
                item.classList.remove('active')
            })

            Array.from(document.querySelectorAll('.sub_menu')).forEach(item => {
                item.classList.remove('active')
            })

            Array.from(document.querySelectorAll('.third-sub_menu')).forEach(item => {
                item.classList.remove('active')
            })

            this.classList.add('active');
            parent.getElementsByClassName('sub_menu')[0].classList.add('active');
        } else {
            Array.from(document.querySelectorAll('.item-sub_menu .open-sub_menu')).forEach(item => {
                item.classList.remove('active')
            })

            Array.from(document.querySelectorAll('.third-sub_menu')).forEach(item => {
                item.classList.remove('active')
            })
            this.classList.add('active');
            parent.getElementsByClassName('third-sub_menu')[0].classList.add('active');
        }
    }
  };

  burger_menu.addEventListener("click", burgerMenu); 
 
  for (i = 0; i < subMenu.length; i++) {
    subMenu[i].addEventListener('click', showSubMenu);
  }



