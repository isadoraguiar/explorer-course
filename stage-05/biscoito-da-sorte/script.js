const closedCookieDisplay = document.querySelector('.closed-cookie')
const openCookieDisplay = document.querySelector('.opened-cookie')
const closedCookieImg = closedCookieDisplay.querySelector('img')
const openOtherCookieBtn = document.querySelector('.opened-cookie button')
const cookiePhrase = document.querySelector('.cookie-phrase')
const phrases = [
  'Sorte é estar pronto quando a oportunidade vem.',
  'Espere pelo mais sábio dos conselhos: o tempo.',
  'Uma surpresa agradável está à sua espera.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Coragem não é a ausência do medo, é fazer apesar do medo.',
  'Você tem um coração generoso e é bem-amado.',
  'O grande prazer da vida é fazer o impossível.',
  'Pare de procurar eternamente; a felicidade está bem ao seu lado.',
  'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
  'Sem o fogo do entusiasmo, não há o calor da vitória.',
  'A vida trará coisas boas se tiveres paciência.'
]

closedCookieImg.addEventListener('click', randomPhrase)
openOtherCookieBtn.addEventListener('click', toggleCookieDisplay)

function randomPhrase() {
  cookiePhrase.innerText = phrases[Math.floor(Math.random() * phrases.length)]

  toggleCookieDisplay()
}

function toggleCookieDisplay() {
  closedCookieDisplay.classList.toggle('hide')
  openCookieDisplay.classList.toggle('hide')
}
