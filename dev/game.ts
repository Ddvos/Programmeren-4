/// <reference path="level.ts"/>
/// <reference path="gameover.ts"/>

class Game {
    
    
    private currentscreen:any
    private scoreElement: HTMLElement;
   
     
    constructor() {
        this.currentscreen = new StartScreen(this) // startscherm will be shown
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
   
        this.gameLoop()   
    }
    

    // this frunction will loop level
    private gameLoop(){
      
        this.currentscreen.update()  
        
     
    
        requestAnimationFrame(() => this.gameLoop())
    }

    // this function will run level
    public showLevel() { 
        document.body.innerHTML = ""
        this.currentscreen = new Level(this);
       
       
    }


    // this function will run when you are game over
    public showGameoverScreen() {
        console.log("Game over")
        document.body.innerHTML = ""
        this.currentscreen = new GameOver(this)
      
       
    }
} 


window.addEventListener("load", ()=> new Game())