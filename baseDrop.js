class BaseDrop{
    constructor(width, height, radius){
        this.body = Bodies.circle(width, height, radius);
        this.x=Math.random();
        this.y=Math.random();
    }

}