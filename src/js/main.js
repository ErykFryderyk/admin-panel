'use strict';

const hamburger = document.querySelector('.hamburger');
const body = document.querySelector('body'); 
const sidebar = document.querySelector('.sidebar');
const mainPanel = document.querySelector('[data-main-panel]');
// const dropdownBtn = document.querySelector('[data-dropdown-btn]');
// const profileBtn = document.querySelector('[data-profile-btn]');
// const dropdown = document.querySelector('[data-dropdown]');
const profileDropdown = document.querySelector('[data-profile-dropdown]');
const dotsBtn = document.querySelector('[data-settings-btn]');
const sidebarCloseBtn = document.querySelector('[data-settings-close-btn]');
const settingsSidebar = document.querySelector('[data-right-sidebar]');


document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-btn]");
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;
    
    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    });
})

const toggleFunction = () => {
    
    sidebar.classList.toggle('sidebar-active');
    mainPanel.classList.toggle('panel-active');
    body.classList.toggle('mobile-nav-active');
}

// const showDropdown = (el) => {

//     if (el.classList.contains('show')){
//         el.classList.add('hide')
//         el.classList.remove('show')
//     }else{
//         el.classList.add('show')
//         el.classList.remove('hide')
//     }
// }


hamburger.addEventListener('click', toggleFunction);

// dropdownBtn.addEventListener('click', function() {
//     const elName = dropdown;
//     showDropdown(elName);
// });

// profileBtn.addEventListener('click', function() {
//     const elName = profileDropdown;
//     showDropdown(elName);
// });

dotsBtn.addEventListener('click', function() {
    settingsSidebar.classList.toggle('right-sidebar--active');
})

sidebarCloseBtn.addEventListener('click', function() {
    settingsSidebar.classList.toggle('right-sidebar--active');
})
