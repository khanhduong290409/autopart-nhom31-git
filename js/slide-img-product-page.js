/**  Increment and Decrement input Number **/
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const totalItems = document.getElementById('totalItems')

plus.addEventListener('click', () => {
  totalItems.value++
})

minus.addEventListener('click', () => {
  totalItems.value--
  if (totalItems.value == 0 || totalItems.value < 0) {
    totalItems.value = 1
  }
})
totalItems.addEventListener('change', () => {
    if (totalItems.value == 0 || totalItems.value < 0) {
      totalItems.value = 1
    }
  })
  
  /** change emphasis product Picture **/
  
  const smallpictures = document.querySelectorAll('.smallpictures')
  const emphasisPicture = document.getElementById('emphasisPicture')
  
  smallpictures.forEach(picture => {
    picture.addEventListener('click', (e) => {
      const src = picture.src.replace('-thumbnail', '')
      const currentActivePicture = document.querySelector('.active')
  
      currentActivePicture.classList.remove('active')
      picture.classList.add('active')
  
  
      emphasisPicture.src = src
    })
  })
  /**  opens carousel if window innerWidth is greater then 600px **/
  
  if (window.innerWidth >= 600) {
      emphasisPicture.addEventListener('click', () => {
        document.getElementById('wrapper').classList.remove('hide')
      })
    }
    