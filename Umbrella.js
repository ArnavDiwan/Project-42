class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        this.image = loadImage("Boy/walking_1.png")
        World.add(world, this.body)
        this.batmanImg = loadImage("bat/Bestman-01.png")
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y + 70, 300, 300);
        if(frameCount >= 200){
            image(this.batmanImg, pos.x, pos.y + 70, 300, 300);
           // image.scale = 0.5;
        }
    }
}