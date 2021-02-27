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
    gravity: 1.5,
    velocityY: 0,
    velocityX: 10,
    pulse: 20,

    draw: function(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position_x, this.position_y, this.width, this.height)
    },
    update: function(){
        ctx.clearRect(0, 0, janela_width, janela_altura)
        this.velocityY += this.gravity
        this.position_y += this.velocityY
        if(this.position_y>floor.position_y - this.height){
            this.position_y = floor.position_y - this.height
            this.velocityY = 0
        }

    },
    control:function(e){
        switch (e.key) {
            case 'w':
                bloco.velocityY -= bloco.pulse
                bloco.position_y += bloco.velocityY
            case 'd':
                bloco.position_x += bloco.velocityX
                break
            case 'a':
                bloco.position_x -= bloco.velocityX
                break
        }
    }
}

var floor = {
    position_x:0,
    position_y:550,
    width: janela_width,
    height: 50,

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
      bloco.up()
    })
    document.addEventListener('keydown',function(e){
        console.log(e.key)
        bloco.control(e)
    })
}

main()
