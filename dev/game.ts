/// <reference path="level.ts"/>
/// <reference path="gameover.ts"/>

class Game {
    
    
    private currentscreen:any
    private bullets:Array<Bullet>;
     
    constructor() {
        this.currentscreen = new StartScreen(this) // startscherm will be shown
        this.bullets = new Array<Bullet>();
        this.gameLoop()   
    }
    

    // this frunction will loop level
    private gameLoop(){
      
        this.currentscreen.update()     
        
        for(let b of this.bullets){
            b.move();
        }
        requestAnimationFrame(() => this.gameLoop())
    }

    // this function will run level
    public showLevel() { 
        document.body.innerHTML = ""
        this.currentscreen = new Level(this);
       
       
    }

    public addBullet(b:Bullet){
        console.log("kogel komt wel door")
        this.bullets.push(b);
    }

    // this function will run when you are game over
    public showGameoverScreen() {
        console.log("Game over")
        document.body.innerHTML = ""
        this.currentscreen = new GameOver(this)
      
       
    }
} 


window.addEventListener("load", ()=> new Game())