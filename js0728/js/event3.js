let nav = document.querySelector('nav');
let navLink = document.querySelectorAll('nav ul li a');
// console.log(navLink);

// 頁面捲動時
window.addEventListener('scroll', () => {
    if (window.pageYOffset != 0) {
        nav.style.backgroundColor = 'rgba(0,0,0,.5)';
        navLink.forEach(a => {
            a.style.color='#fff';
        });
    }else{
        nav.style.backgroundColor = '#ccc';
        navLink.forEach(a => {
            a.style.color='#333';
        });
    }

})