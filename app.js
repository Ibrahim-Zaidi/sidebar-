'use strict';

const sideToggle = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sideHeader = document.querySelector('.sidebar');

sideToggle.addEventListener('click', function() {
    sideHeader.classList.toggle('show-sidebar');
})


closeBtn.addEventListener('click', function() {
    if (sideHeader.classList.contains('show-sidebar')) {
        sideHeader.classList.remove('show-sidebar');
    }
})

console.log(sideToggle.classList);