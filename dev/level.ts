/// <reference path="car.ts"/>
/// <reference path="player.ts"/>

class Level {
    
    private div: HTMLElement
    private cars:Car[] = []
    private player:Player
    private game: Game

    private scoreElement:HTMLElement;
    private score:number = 0;

    
    constructor(g:Game) {
        this.game = g    
        this.div = document.createElement("level")
        document.body.appendChild(this.div)

        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        
        this.cars.push(new Car(), new Car(), new Car(), new Car(), new Car())
        this.player = new Player((innerWidth/2), 37, 39,32, this.game) // x postie, leftkey, rightkey
    }

    public update(): void{

        this.scoreElement.innerHTML = "Score: " +  this.score;
        
       
        for(let c of this.cars){
            c.update()

            // if collision go to Game over screen
            if(this.checkCollision(c.getRectangle(), this.player.getRectangle())){
                this.game.showGameoverScreen()
            }

            if (c.getRectangle().left < 0) {
                this.game.showGameoverScreen()
            }
            c.update()
        }
        this.player.update()
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
        }

}