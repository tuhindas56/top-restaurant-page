export default () => {
  const header = document.createElement("header") as HTMLElement
  const nav = document.createElement("nav") as HTMLElement
  const logo = document.createElement("p") as HTMLParagraphElement
  const home = document.createElement("button") as HTMLButtonElement
  const menu = document.createElement("button") as HTMLButtonElement
  const contact = document.createElement("button") as HTMLButtonElement
  const content = document.createElement("div") as HTMLDivElement
  const footer = document.createElement("footer") as HTMLElement

  home.className = "nav"
  menu.className = "nav"
  contact.className = "nav"

  home.setAttribute("id", "home")
  menu.setAttribute("id", "menu")
  contact.setAttribute("id", "contact")
  content.setAttribute("id", "content")

  logo.textContent = "Sushi Sama"
  home.textContent = "Home"
  menu.textContent = "Menu"
  contact.textContent = "Contact"

  footer.innerHTML = `
    <p>
    Site built by
    <a href="https://github.com/tuhindas56/top-restaurant-page/" target="_blank" rel="noopener noreferrer">Tuhin Das</a> 
    | 
    Sushi Icon by <a href="https://www.freepik.com/icon/sushi_2252075#fromView=keyword&page=1&position=0" target="_blank" rel="noopener noreferrer"> justicon</a>
    |
    Images from <a href="https://pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a>
    </p>`

  document.body.appendChild(header)
  header.appendChild(logo)
  header.appendChild(nav)
  nav.appendChild(home)
  nav.appendChild(menu)
  nav.appendChild(contact)
  document.body.appendChild(content)
  document.body.appendChild(footer)
}
