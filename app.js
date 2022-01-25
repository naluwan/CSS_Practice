// const input = document.querySelectorAll('#action__input_1')
const tbody = document.querySelector('.table__body')


// 只能操作第一個input和menu
// input.addEventListener('click', e => {
//   console.log(input)
//   const menu = document.querySelectorAll('#action__menu_1')
//   menu.classList.toggle('hidden')
//   // const target = e.target
//   // if(target.matches('#action__input_1')){
//   //   console.log(target)
//   //   const menu = document.querySelector(`${target}~ #action__menu_1`)
//   //   menu.classList.toggle('hidden')
//   // }
// })

// 可以操作所有input和menu
tbody.addEventListener('click', e => {
  const target = e.target
  if(target.matches('#action__input_1')){
    // nextElementSibling 抓取同層下一個element
    const menu = target.nextElementSibling
    menu.classList.toggle('hidden')
  }
})