/// <reference path="game.ts"/>

class Bullet {
    
    private div: HTMLElement;
    
    public x:number;
    public y:number;
    public width:number = 25;
    public height:number = 25;
    private xspeed:number;
    private yspeed:number;

    constructor(x:number, y:number) {
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
                
        this.x = x;
        this.y = y;

        this.xspeed = 0;
        this.yspeed = -1;
      
        this.move();
    }

      // this will rturn the postion of the element 
      public getRectangle() {
        return this.div.getBoundingClientRect() 
    }

    public update(){

    }

    public move():void {
        this.x += this.xspeed;
        this.y += this.yspeed;
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

}