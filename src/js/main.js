'use strict';

const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');


const toggleFunction = () => {
    sidebar.classList.toggle('toggle');
}


hamburger.addEventListener('click', toggleFunction);
