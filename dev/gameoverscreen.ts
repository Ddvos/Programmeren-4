class GameOverScreen {

    private div: HTMLElement
    private game: Game
  

    constructor(g: Game) {
        this.game = g
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)
        this.div.addEventListener("click", () => this.splashClicked())
        this.div.innerHTML = "Game over, click here to play again"
    }

    public update(){
        
    }

    private splashClicked() {
        this.game.showPlayScreen()
    }
}