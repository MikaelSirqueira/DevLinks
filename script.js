function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    const texto = "Foto minha, no sol, ajeitadinho"

    img.setAttribute("src", "./assets/avatar-light.jpg")
    img.setAttribute("alt", texto)
  } else {
    const texto = "Foto minha, de noite, num ponto de ônibus, estilo urbano"
    img.setAttribute("src", "./assets/avatar.jfif")
    img.setAttribute("alt", texto)
  }
}
