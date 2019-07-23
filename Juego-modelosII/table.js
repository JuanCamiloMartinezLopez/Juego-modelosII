class Table {
    constructor(x, y, w, h) {
        const options = {
            restitution: 0.5
        }
        this.body = Matter.Bodies.rectangle(x, y, w, h,options);
        Matter.World.add(world, this.body);
        this.w = w;
        this.h = h;
        this.body.isStatic = true;
    }

    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(215,160,42);
        rect(0,0,this.w,this.h)
        rectMode(CENTER);
        imageMode(CENTER);
        pop();

    }
}