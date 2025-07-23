//------------------------------------- ДОБАВЛЕНИЕ ЛАЙКА
let btns = document.querySelectorAll('.card__button')

let likeCounter = [...btns] // нод узлы сначала превращаем в массив

let result = [] 
likeCounter.forEach((btn) => {
 result.push(btn)
}) // каждый узел сначала должен быть превращен в массив

let likeBtn = result[0]


likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('card__button-like')
  console.log(likeBtn)
})
//------------------------------------- ДОБАВЛЕНИЕ ЛАЙКА