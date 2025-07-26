//------------------------------------- ПОЯВЛЕНИЕ ДОП. ИНФО [попап  с деталями курса]
let popup = document.querySelector('#popup')
let close = document.querySelector('.popup__close')
let products = document.querySelector('.products')

let popupTitle = document.querySelector('.popup__title')
console.log(popupTitle.textContent)

// ---------------------------------------------------------------------- таргетируем карточку и
products.addEventListener('click', (event) => {
  const targetCard = event.target.closest('.card')


    // ----------------------------------------------------------------------меняем состояние карточки и добавляем уникальное описание для попаgа
      if (targetCard) {
        popup.classList.add('popup--active')

        let description = targetCard.querySelector('.content').dataset.desc
        let popupDesc = document.querySelector('.popup__desc')
        popupDesc.textContent = description
        console.log(popup)
      } 
      else if (popup.classList.contains('popup--active')) {
        let nonPopup = event.target
        if (nonPopup) {
           popup.classList.remove('popup--active')
        }
      }
})

// -------------------------------------------------------------------------закрытие попапа по кнопке
close.addEventListener('click', () => {
  popup.removeAttribute('open');
  popup.classList.toggle('popup--active')
})


//--------------------------------------------------------------------------- ПОЯВЛЕНИЕ ДОП. ИНФО [попап  с деталями курса]







