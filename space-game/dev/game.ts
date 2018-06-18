/// <reference path="level.ts"/>
/// <reference path="gameover.ts"/>

class Game {
    
    
    private currentscreen:any
     
    constructor() {
        this.currentscreen = new StartScreen(this) // startscherm will be shown
       
    }
    

    // this frunction will loop level
    private gameLoop(){
      
        this.currentscreen.update()       
        //requestAnimationFrame(this.gameLoop.bind(this));
    }

    // this function will run level
    public showLevel() { 
        document.body.innerHTML = ""
        this.currentscreen = new Level(this);   
        requestAnimationFrame(this.gameLoop.bind(this)); 
       
    }

    // this function will run when you are game over
    public showGameoverScreen() {
        console.log("Game over")
        document.body.innerHTML = ""
        this.currentscreen = new GameOver(this)
      
       
    }
} 


window.addEventListener("load", ()=> new Game())