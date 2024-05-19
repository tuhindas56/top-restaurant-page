export default () => {
  const content = document.querySelector("div#content") as HTMLDivElement
  const container = document.createElement("div") as HTMLDivElement

  container.innerHTML = `
      <h1 class="menu">Menu</h1>
      <div class="item">
        <img src="${require("../assets/nigirisushi.jpg")}" alt="Nigiri Sushi" class="imageFit" />
        <div>
          <p class="item-heading">Nigiri Sushi</p>
          <p class="item-info">Calories: 50-70 per piece</p>
          <p class="item-price">¥250</p>
        </div>
      </div>
      <div class="item">
        <img src="${require("../assets/sashimi.jpg")}" alt="Sashimi" class="imageFit" />
        <div>
          <p class="item-heading">Sashimi</p>
          <p class="item-info">Calories: 100 - 200</p>
          <p class="item-price">¥650</p>
        </div>
      </div>
      <div class="item">
        <img src="${require("../assets/sushiroll.jpg")}" alt="Sushi Rolls" class="imageFit" />
        <div>
          <p class="item-heading">Sushi Rolls</p>
          <p class="item-info">Calories: 300 - 500</p>
          <p class="item-price">¥400</p>
        </div>
      </div>
      <div class="item">
        <img src="${require("../assets/sake.jpg")}" alt="Sake" class="imageFit" />
        <div>
          <p class="item-heading">Sake</p>
          <p class="item-info">Alcohol content: 15-16%</p>
          <p class="item-price">¥750</p>
        </div>
      </div>
      <div class="item">
        <img src="${require("../assets/koshukayagatake.jpg")}" alt="Koshu Kayagatake" class="imageFit" />
        <div>
          <p class="item-heading">Koshu Kayagatake</p>
          <p class="item-info">Alcohol content: 12-14%</p>
          <p class="item-price">¥2000</p>
        </div>
      </div>
      <div class="item">
        <img src="${require("../assets/asahi.jpg")}" alt="Asahi Superdry" class="imageFit" />
        <div>
          <p class="item-heading">Asahi Superdry</p>
          <p class="item-info">Alcohol content: 5%</p>
          <p class="item-price">¥250</p>
        </div>
      </div>`

  container.className = "container"

  content.appendChild(container)
}
