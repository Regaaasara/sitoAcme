//bottoncino per andare su

function scrollToTop() {
    window.scrollTo(0, 0);
  }

//pop up

let popUp =
document.getElementById("popup");

function goUp() {
    popUp.style = "bottom: -50px;";
}

function disappear() {
  popUp.style = "display: none;";
}