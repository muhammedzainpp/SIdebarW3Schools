var sidebarelement;
var mainelement
window.getElements = function () {
    sidebarelement = document.getElementById("mySidebar");
     mainelement = document.getElementById("main");
}
window.openNav = function () {
    sidebarelement.style.width = "250px";
    mainelement.style.marginLeft = "250px";
}


window.closeNav = function () {
    sidebarelement.style.width = "0";
    mainelement.style.marginLeft = "0";
}