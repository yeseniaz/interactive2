let circle1 = document.querySelector('.circle1')
let circle2 = document.querySelector('.circle2')
let circle3 = document.querySelector('.circle3')

circle1.addEventListener('transitionend',function(e){
  let currentTransform = getComputedStyle(circle1).transform
  console.log(currentTransform)
  if(currentTransform == 'matrix(1, 0, 0, 1, -375, 0)'){
      console.log('you done did it')
      circle1.classList.add('hyperspace')
  } else {
    console.log('you didnt done do it')
  }
})

circle2.addEventListener('transitionend',function(e){
  let currentTransform = getComputedStyle(circle2).transform
  console.log(currentTransform)
  if(currentTransform == 'matrix(1, 0, 0, 1, 0, -260)'){
      console.log('you done did it')
      circle2.classList.add('hyperspace')
  } else {
    console.log('you didnt done do it')
  }
})

circle3.addEventListener('transitionend',function(e){
  let currentTransform = getComputedStyle(circle3).transform
  console.log(currentTransform)
  if(currentTransform == 'matrix(1, 0, 0, 1, 371, 0)'){
      console.log('you done did it')
      circle3.classList.add('hyperspace')
  } else {
    console.log('you didnt done do it')
  }
})
