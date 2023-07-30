function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  //Pegar a img
  const img = document.querySelector("#profile img")

  //Trocar a img
  if (html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    
    //Trocar a img
    img.setAttribute('src', './assets/avatar.png')
  }
}