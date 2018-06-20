/// <reference path="car.ts"/>
/// <reference path="player.ts"/>
///<reference path="bullet.ts"/>

class Level {
    
    private div: HTMLElement
    private bullets:Array<Bullet>;
    private cars:Car[] = [] // array with valling meteors
    private player:Player
    private game: Game

    private scoreElement:HTMLElement;
    private score:number = 0;

    
    constructor(g:Game) {
        this.game = g    
        this.div = document.createElement("level")
        document.body.appendChild(this.div)
        this.bullets = new Array<Bullet>();
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
        
        this.cars.push(new Car(), new Car(), new Car(), new Car(), new Car())
        this.player = new Player((innerWidth/2), 37, 39, this) // x postie, leftkey, rightkey
       
    }

    public update(): void{

        let multiplier:number = Math.pow(10,10- 1);

        this.score = this.score + multiplier;
        this.scoreElement.innerHTML = "Score: " +  this.score;
      
        for(let b of this.bullets){
            
             

             for(let c of this.cars){
               

                if(this.checkCollision(c.getRectangle(), b.getRectangle())){// if collision between bullet en meteor delete meteor
                    console.log("het werkt")
                }
             }
        }
        
       //cehcks colision between meteor and player
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


        
      

        for(let b of this.bullets){ // moves the bullet
            b.move();
        }


    }

    public addBullet(b:Bullet){ // fires bullet
        this.bullets.push(b);
    }



    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
        }

}