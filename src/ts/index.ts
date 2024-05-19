import "../style.css"
import setupPage from "./onPageLoad"
import unloadContent from "./unloadContent"
import loadHome from "./loadHome"
import loadContact from "./loadContact"

setupPage()
loadContact()

let currentPage = "contact"
