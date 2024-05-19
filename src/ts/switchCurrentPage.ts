import unloadContent from "./unloadContent"
import loadHome from "./loadHome"
import loadMenu from "./loadMenu"
import loadContact from "./loadContact"

let currentPage = "home"

export default (event: Event) => {
  const target = event.target as HTMLButtonElement
  switch (target.id) {
    case "home":
      if (currentPage !== "home") {
        unloadContent()
        loadHome()
        currentPage = "home"
      } else {
        return
      }
      break
    case "menu":
      if (currentPage !== "menu") {
        unloadContent()
        loadMenu()
        currentPage = "menu"
      } else {
        return
      }
      break
    case "contact":
      if (currentPage !== "contact") {
        unloadContent()
        loadContact()
        currentPage = "contact"
      } else {
        return
      }
      break
  }
}
