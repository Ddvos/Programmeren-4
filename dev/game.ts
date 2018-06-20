/// <reference path="../docs/js/audio.js"/>
/// <reference path="playscreen.ts"/>

class Game {
    
    public currentscreen:any
    public audio:any
    private scoreElement: HTMLElement;

    constructor() {
        this.currentscreen = new StartScreen(this)
        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
   
        this.gameLoop()        
    }
    
    private gameLoop():void{
        this.currentscreen.update()   
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new PlayScreen(this)
        
    }

    public showGameoverScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new GameOverScreen(this)
     
    }

} 

window.addEventListener("load", () => new Game())