# Space Game

Dit is mijn spel voor Programmeren 4

## Online speelbaar

https://ddvos.github.io/Programmeren-4/

### Minimale Eisen game 

De game bevat een start en eind scherm en er zijn geen bugs


### OOP principes

Het spel bezit de volgende OOP principes

```
Classes
Encapsulation
Composition
Inheritance
```



* Classes/Encapsulation
Ik heb gebruik gemaakt van Classes zodat mijn game overzichtelijk blijft. Hieronder is een voorbeeld van de class Level. Ook is hier te zien dat ik gebruik maak van Encapsulation. Dit houdt in dat je bijvoorbeeld een variabele op private of public zet. Public is bereikbaar voor iedereen private is alleen te gebruiken binnen de class. 

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
        
        this.cars.push(new Car(this.game), new Car(this.game), new Car(this.game), new Car(this.game), new Car(this.game))
        this.player = new Player((innerWidth/2), 37, 39, this) // x postie, leftkey, rightkey
       
    }


* Composition
Ik heb gebruik gemaakt van meerdere documenten deze komen allemaal samen in mijn game.ts

 Class Game {
    
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

* Inheritance 
Voor de update van de positie van meteor en ruimte schip gebruik ik inheritance door gebruik te maken van de gameObject.ts

class Astroid extends GameObject {
    
    private game:Game
    
    private speedX: number
    private speedY: number
    
    constructor(g:Game) {
        super()
        this.game = g
        this.div = document.createElement("astroid")
        //this.div.style.transform = `translate(-60px, -60px)`
        document.body.appendChild(this.div)
                
        this.x = Math.random() * window.innerWidth
        this.y = -100;
        this.speedX = (Math.random() * 0.5)
        this.speedY = 1 + (Math.random() * 4)
    }
 

### Klassendiagram

![alt text](https://stud.hosted.hr.nl/0931703/wp-content/uploads/2018/06/DBMS-ER-Diagram.png)
 

### Extra uitdagingen

Ik heb de audio library  Howler.js toegevoegd. Voor een geluidseffect als de laser de meteor raakt.


### Peer review

Ik heb een peer review voor de game van Koen Westra geschreven

Let op: inmiddels is de game al flink gewijzigd 

https://koenwestra.github.io/game-typescript/

 Deze review maak ik aan de hand van de minimale eisen die door de opleiding zijn gesteld
• De code van het individuele project staat op GitHub.
	Ja, ik kan de code terug vinden op GitHub
• De game is online speelbaar.’
	Ja, hij is online speelbaar
• De game bevat minimaal één van de onderstaande extra uitdagingen.
       Nee, nog niet
• De game heeft een startscherm en een eindscherm.
       Nee, de game heeft helaas geen start en eindscherm
• Er zijn geen bugs.
       Nee, ik heb geen bugs gevonden.
• Het project maakt gebruik van deze OOP principes:

