var frames = 0

let canvas = document.getElementById('janela')
let ctx = canvas.getContext('2d')

var janela_width = canvas.width
var janela_altura = canvas.height


var bloco = {
    position_x: 0,
    position_y: 0,
    width: 30,
    height:30,
    gravity: 1,
    velocity: 0,
    pulse: 20,

    draw: function(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position_x, this.position_y, this.width, this.height)
    },
    update: function(){
        ctx.clearRect(0, 0, janela_width, janela_altura)
        //this.velocity += this.gravity
        if(this.position_y<=498){
            this.velocity += this.gravity
            this.position_y += this.velocity
        }
        else{
            //this.position_y = 528
            this.velocity = 0
        }
    },
    up:function(){

    }
}

var floor = {
    position_x:0,
    position_y:558,
    width: janela_width,
    height: 42,
    
    draw: function(){
        ctx.fillStyle = 'black'
        ctx.fillRect(this.position_x, this.position_y, this.width, this.height)
    }
}

function run(){
    atualizar()
    paint()
    window.requestAnimationFrame(run)
}

function atualizar(){
    frames +=1
    bloco.update()
}

function paint(){
    floor.draw()
    bloco.draw()
}

function main(){
    run()
    document.addEventListener('click',function(e){
        bloco.velocity -= bloco.pulse
        bloco.position_y += bloco.velocity
    })
    document.addEventListener('keydown',function(e){
        alert(bloco.position_y)
    })
}

main()