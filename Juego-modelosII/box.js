class Box {
    constructor(x, y, r, l) {
        const options = {
            restitution: 0.5
        }
        this.body = Matter.Bodies.circle(x, y, r, options);
        Matter.World.add(world, this.body);
        this.r = r
        this.l = l
        

    }
    //funcion para dibujar al cerdo
    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(255);
        rectMode(CENTER);
        imageMode(CENTER);
        image(boxImg, 0, 0, this.r, this.r);
        pop();

    }

    
    //funcion que verfifica si el cerdo tiene vida
    islife() {
        if (this.l < 0) {
            return false;
        }else{
        return true;
        }
    }

}