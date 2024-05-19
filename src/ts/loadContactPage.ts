export default () => {
  const content = document.querySelector("div#content") as HTMLDivElement
  const container = document.createElement("div") as HTMLDivElement

  container.innerHTML = ` 
      <h1>Contact</h1>
      <p><span class="bold">Phone:</span>(123) 456-7890</p>
      <p><span class="bold">Email:</span>info@sushisamarestaurant.com</p>
      <p class="bold">Socials:</p>
      <a class="fa-brands fa-facebook"></a>
      <a class="fa-brands fa-twitter"></a>
      `
  container.className = "container"

  content.appendChild(container)
}
