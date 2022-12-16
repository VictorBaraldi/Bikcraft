const menu = document.querySelectorAll(".principal a");


function pageSelect(value) {
    const href = value.href;
    console.log(href);
}

menu.forEach(pageSelect)



console.log(document.location.href);


