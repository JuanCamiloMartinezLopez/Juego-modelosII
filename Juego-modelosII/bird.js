class Bird {
    constructor(x, y, r) {
        const options = {
            restitution: 0.5
        }
        this.body = Matter.Bodies.circle(x, y, r, options);
        // this.body.mass *= 4;
        Matter.Body.setMass(this.body, this.body.mass * 4);
        Matter.World.add(world, this.body);
        this.r = r;
        this.intersects = function(other){
            let d = dist(this.x,this.y,other.x2,other.y2);
            if (d < this.r){
                return true;                
            } else{
                return false;
            }

        }
    }

    //funcion para dibujar al misil
    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(dotImg, 0, 0, this.r * 2, this.r * 2);
        pop();

    }


}