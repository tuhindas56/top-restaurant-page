export default () => {
  const content = document.querySelector("div#content") as HTMLDivElement
  const containerOne = document.createElement("div") as HTMLDivElement
  const containerTwo = document.createElement("div") as HTMLDivElement
  const containerThree = document.createElement("div") as HTMLDivElement
  const pageHeading = document.createElement("h1") as HTMLHeadingElement
  const description = document.createElement("p") as HTMLParagraphElement

  containerOne.innerHTML = `
    <h1>Welcome to Sushi Sama!</h1>
    <p class="container-content">
      At Sushi Sama, we pride ourselves on crafting sushi experiences that tantalize the senses
      and transcend the ordinary. From meticulously prepared nigiri to innovative sushi rolls
      bursting with flavor, each bite is a journey through Japan's rich culinary heritage. Join
      us and discover the perfect harmony of tradition and innovation in every dish.
    </p>`

  containerTwo.innerHTML = `
    <p class="container-heading">Hours Open:</p>
    <p class="container-content">Monday - Friday: 11:30 AM - 10:00 PM</p>
    <p class="container-content">Saturday - Sunday: 12:00 PM - 11:00 PM</p>`

  containerThree.innerHTML = `
    <p class="container-heading">Location</p>
    <p class="container-content">Sushi Sama, 123 Sakura Avenue, Zen Garden Plaza Tokyo, Japan</p>`

  containerOne.className = "container"
  containerTwo.className = "container"
  containerThree.className = "container"

  content.appendChild(containerOne)
  containerOne.appendChild(pageHeading)
  containerOne.appendChild(description)
  content.appendChild(containerTwo)
  content.appendChild(containerThree)
}
