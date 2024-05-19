import "../style.css"
import setupPage from "./onPageLoad"
import loadHome from "./loadHome"
import switchCurrentPage from "./switchCurrentPage"

setupPage()
loadHome()

const buttons = document.querySelectorAll("button.nav")

buttons.forEach((button) => button.addEventListener("click", switchCurrentPage))
