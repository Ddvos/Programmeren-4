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
Ik heb gebruik gemaakt van Classes zodat mijn game overzichtelijk blijft. Hieronder is een voorbeeld van de class Playscreen. Ook is hier te zien dat ik gebruik maak van Encapsulation. Dit houdt in dat je bijvoorbeeld een variabele op private of public zet. Public is bereikbaar voor iedereen private is alleen te gebruiken binnen de class. 

class PlayScreen {

    private phaserbeam: Phaserbeam
    private astroids: Astroid[] = []
    private spaceship: Spaceship
    private game: Game
    private gamefix: number = 0
    public score: number = 0

    private scoreElement:HTMLElement;


    constructor(g:Game) {
        this.game = g
        this.spaceship = new Spaceship( 37, 39, 32, this.game)
        // Start with 10 astroids
        for (var i = 0; i < 10; i++) {
            this.astroids.push(new Astroid(this.game))

        }

        this.scoreElement = document.createElement("score");
        document.body.appendChild(this.scoreElement);
    }


* Composition
Ik heb gebruik gemaakt van meerdere documenten deze komen allemaal samen in mijn game.ts

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
 
 ```
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

	Classes		ja
	Encapsulation	ja 
	Composition	ja 
	Inheritance 	nee 

• De GitHub pagina bevat een ReadMe bestand. Dit bestand bevat:
• Per bovengenoemd OOP principe een uitleg: waar is het toegepast, en waarom is het
op die plek toegepast. De uitleg is inclusief code voorbeelden.
• Een klassendiagram van de game.
• Een link naar de peer review die in week 6 is gedaan.

De bovenstaande punten zijn nog niet terug te vinden in de ReadMe

Extra uitdagingen
• De game ziet er zeer verzorgd uit dankzij goed uitgewerkt UI design en artwork.
• De game bevat een hiscore lijst. Scores worden bewaard nadat de game is afgesloten.
• De game werkt met Canvas in plaats van DOM elementen
• De game bevat local of online multiplayer.
• De game werkt op mobiele schermen en ondersteunt touchscreen controls.
• De game maakt gebruik van device api's zoals de camera, microfoon, 

De game heeft ook nog geen extra uitdagingen

De game heeft een goede gameplay en speelt lekker. Het is duidelijk hoe het spel in elkaar zit. Ik ben er wel achter gekomen dat de snake een maximale lengte kan hebben, dit vind ik zelf jammer. Omdat je het hierdoor niet echt kan uitspelen. Ook vind ik dat de snake nog wat langzaam gaat hierdoor is het spel vrij eenvoudig en is er niet echt een uitdaging. 

```


