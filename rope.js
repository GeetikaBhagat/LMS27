class Rope{
    constructor(bodyA,bodyB, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);

    }
    display(){
        var pos1 = this.rope.bodyA.position;
        var pos2 = this.rope.bodyB.position;

        var anchor1X = pos1.x;
        var anchor1Y = pos1.y;

        var anchor2X = pos2.x+ this.offsetX;
        var anchor2Y = pos2.y+this.offsetY;
        strokeWeight(3);
        stroke(255)
        line(anchor1X, anchor1Y, anchor2X, anchor2Y);
    }
}