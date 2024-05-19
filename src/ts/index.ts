import "../style.css"
import setupPage from "./onPageLoad"
import unloadContent from "./unloadContent"
import loadHomepage from "./loadHomepage"
import loadContactPage from "./loadContactPage"

setupPage()
loadContactPage()

let currentPage = "contact"
