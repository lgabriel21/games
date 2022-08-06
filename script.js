const sonic = document.querySelector('.sonic')
const pipe = document.querySelector('.pipe')


const jump = () =>{
    sonic.classList.add('jump')

    setTimeout(() => {
        sonic.classList.remove('jump')
    },500)
}
const loop = setInterval(() => {
    console.log(loop);
    const pipePosition = pipe.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px','');
    
    
    if(pipePosition <= 120 && pipePosition > 0 && sonicPosition < 80){
        
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`
        
        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`
        
        sonic.src ='./imagens/sonic-gameover.gif'
        sonic.style.width= "95px"
        sonic.style.marginLeft= "0px"
    
        clearInterval(loop)
    }

}, 10)

document.addEventListener('keydown', jump)