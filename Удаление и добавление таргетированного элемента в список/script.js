// Задача:

// Реализовать удаление строки при клике на кнопку "Удалить"
// При удалении выводить console.log: "Удален пользователь ID: [id]"
// Использовать делегирование событий
// Решение должно работать для динамически добавляемых строк

let deleteBtn = document.querySelector('.delete-btn')
let productsTable = document.querySelector('#products-table')
let usersTable = document.querySelector('#users-table')

let addItem = document.querySelector('[data-action="add"]')



productsTable.addEventListener('click', (event) => {
  let targetDeleteBtn = event.target.closest('.delete-btn')
  let item =  event.target.closest('tr')?.firstElementChild.textContent
  if (targetDeleteBtn) {
 

    targetDeleteBtn.closest('tr').remove()
     console.log(`Удален товар ID: ${item}`)

   
  }
})



addItem.addEventListener('click', function() {
   // Замер времени инициализации ДО вашего кода
   console.time('init-delegation');

  let tBody = document.querySelector('tbody')
  let newItem = document.createElement('tr')
 
 
  let itemsId = [...productsTable.querySelectorAll('[data-id]')].map(btn => {
    return +btn.dataset.id
  })
  console.log(itemsId)
  let maxId = Math.max(...itemsId)
  let newId = maxId + 1
  let itemNumber = newId
  console.log(maxId)

  
  newItem.innerHTML = `
 <td>Товар ${itemNumber}</td>
 <td><button class="delete-btn" data-id="${newId}">❌ Удалить</button></td>
  `
  tBody.append(newItem)

  console.timeEnd('init-delegation'); // Покажет время выполнения
})


