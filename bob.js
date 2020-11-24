class Bob{
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution:1.0,
            friction: 0,
            density: 0.8
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y)
        fill(255,50,0);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r);
        pop();
    }
}