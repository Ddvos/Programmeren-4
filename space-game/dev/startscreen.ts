

class StartScreen {

    private div: HTMLElement
    private game : Game

    constructor(g:Game) {
        this.game = g
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", ()=>this.splashClicked())
        this.div.innerHTML = "START THE GAME"
    }

    public update(){

    }

    private splashClicked() {
        
        this.game.showLevel() //this function will start in game.ts
    }
}