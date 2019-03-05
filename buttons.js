
let element3 = document.querySelector('#element-3')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')
let element16 = document.querySelector('#element-16')


element3.addEventListener('click',function() {

  element3.animate([{
			opacity: getComputedStyle(this).opacity,
			marginLeft: getComputedStyle(this).marginRight,
			fontSize:  getComputedStyle(this).fontSize,
			borderWidth:  getComputedStyle(this).borderWidth
		},
    {
			opacity: 0.4,
			marginLeft: '-740px',
			fontSize: '24px',
			borderWidth: '10px'
		}], {
      duration: 5,
      iterations: 1,
      fill:'forwards'
  });

})

element6.addEventListener('pointermove',function(e){
  var xPos = e.pageX-200;
  var yPos = e.pageY-200;

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})

element4.addEventListener('click',function(){
  this.classList.t('gradient-background')
})

element5.addEventListener('click', function(){
  this.classList.toggle('circle');
})
