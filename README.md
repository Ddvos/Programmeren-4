## Speelbare game

https://stud.hosted.hr.nl/0940512/game/docs/

## Checklist

- [x] De game heeft een startscherm en een eindscherm.
- [x] Er zijn geen bugs.

## Toelichting OOP 

- Classes
Ik heb alle objecten van de game in een class gezet. Zo heb ik bijvoorbeeld een spaceship class (dit ben jij) en een astroid class. deze moet je vermijden.
```TypeScript
class Spaceship extends GameObject {
     
    private downkey     : number
    private upkey       : number
    private leftkey     : number
    private rightkey    : number
    private spacekey    : number
    .......
}
```
```TypeScript
class Astroid extends GameObject {
    
    private game:Game
    
    private speedX: number
    private speedY: number
    
    constructor(g:Game) {
        super()
        this.game = g
        .....
}
```
- Encapsulation 
Ik maak overal gebruik van encapsulation. Zo maak ik bijvoorbeeld functies die overal bruikbaar moeten zijn public. Maar andere dingen zoals de snelheid en de toets registraties private omdat die alleen in het spacship.ts document gebuikt moeten worden zodat deze niet een onbedoelde waarde krijgen. Het is niet de bedoeling dat iemand vanuit astroid bijvoorbeeld de snelheid van het spaceship gaat veranderen naar een string.
```TypeScript
class Spaceship extends GameObject {
     
    private downkey     : number
    ......
    
    private downSpeed   : number = 0
    private upSpeed     : number = 0
    private leftSpeed   : number = 0
    private rightSpeed  : number = 0

    public fired        : boolean = false

    private game:Game
    .......
}
```
- Composition
Mijn game is zo opgebouwd dat mijn game verschillende schermen heeft zoals een gameover scherm of een speelscherm. Dit speelscherm heeft objecten als astroids en een spaceship. Er is dus niet 1 document dat alles heeft maar het is opgebouwd uit meerdere delen.
```TypeScript
class Game {
    
    public currentscreen:any
    public audio:any

    constructor() {
        this.currentscreen = new StartScreen(this)
        this.gameLoop()        
    }
    
    private gameLoop():void{
        this.currentscreen.update()   
        requestAnimationFrame(() => this.gameLoop())
    }

    public showPlayScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new PlayScreen(this)
        winMusic.stop()
        music.play()
    }

    public showGameoverScreen() {
        document.body.innerHTML = ""
        this.currentscreen = new GameOverScreen(this)
        music.stop()
    }
}
```
- Inheritance
Mijn spaceship , phaserbeam en astroids maken gebruik van inheritance omdat zij het gameObject.ts bestand allemeaal gebruiken. Zo word er geen dubbele code geschreven in de bestanden.

```TypeScript
class Phaserbeam extends GameObject {

    private game:Game

    constructor(g:Game){
        super();
        this.game = g
    ......
}
```
```TypeScript
class GameObject {
    protected x: number
    protected y: number
    protected div: HTMLElement

    constructor() {
    }

    public update(): void {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    ......
}
```
## Klassendiagram

![save the spaceship](https://user-images.githubusercontent.com/32699476/41508388-43bc07c6-7244-11e8-9320-c072c10f8622.png)

## Peer review

https://github.com/Sweetpurple616/PGRM04/issues/1

https://github.com/JeroenvanderRhee/game-prog/issues/1

## Extra uitdaging

Ik heb Audio via de via de Howler.js library toegevoegd. De geluiden worden in de juiste functies gestart en getopt.
