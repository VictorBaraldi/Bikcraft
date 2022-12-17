const menu = document.querySelectorAll(".header-menu a");



function pageSelect(value) {
    const href = value.href;
    const location = window.location.href;
    
    if (location.includes(href)) {
        value.classList.add('ativo')
    } else {

    }
}

menu.forEach(pageSelect)






