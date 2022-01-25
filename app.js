const tbody = document.querySelector('.table__body')
const darkModeToggle = document.querySelector('#dark__mode__toggle')
const checkBox = document.querySelector('.table__cell--checkbox')

// 可以操作所有input和menu
tbody.addEventListener('click', e => {
  const target = e.target
  if(target.matches('#action__input_1')){
    // nextElementSibling 抓取同層下一個element
    const menu = target.nextElementSibling
    menu.classList.toggle('hidden')
  }
})

tbody.addEventListener('change', e => {
  const target = e.target
  const tableRow = target.parentElement.parentElement
  if(target.checked){
    tableRow.classList.add('table__row__checked')
  }else{
    tableRow.classList.remove('table__row__checked')
  }
})

// 因為目標是checkbox不是button，所以事件要用change，不是click
darkModeToggle.addEventListener('change', e => {
  const target = e.target
  if(target.checked){
    document.documentElement.setAttribute('data-theme', 'dark')
  }else{
    document.documentElement.setAttribute('data-theme', 'light')
  }
})


