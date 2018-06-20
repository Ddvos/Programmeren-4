/// <reference path="gameObject.ts"/>

class Phaserbeam extends GameObject {

    private game:Game

    constructor(g:Game){
        super();
        this.game = g
        this.div = document.createElement("phaserbeam")
        document.body.appendChild(this.div)

        // start the beam in the middle of the ship
        this.x = this.game.currentscreen.spaceship.x + 42
        this.y = this.game.currentscreen.spaceship.y - 40
    }

    private removePhaserbeam(){
        this.div.remove()
        this.game.currentscreen.spaceship.fired = false
    }

    public update() : void {
        
        // move the beam up
        this.y -= 10
        // remove phaserbeam element when it is far outside of the screen
        if (this.getRectangle().bottom < -200){
            this.removePhaserbeam()
        }  

        super.update()
    }
}