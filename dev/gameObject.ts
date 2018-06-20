class GameObject {
    protected x: number
    protected y: number
    protected div: HTMLElement

    constructor() {
    }

    public update(): void {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public getRectangle(){
        return this.div.getBoundingClientRect()
    }
}