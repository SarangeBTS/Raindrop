class DROP{
    constructor(x,y){

        var options ={
            restitution:0.1,
            friction:0.001
            }
        this.raindrop=Bodies.circle(x,y,5,options)
        this.r=5
        World.add(world,this.raindrop)
        

    }


    display(){
 
        ellipseMode(RADIUS)


        ellipse(this.raindrop.position.x,this.raindrop.position.y,this.r,this.r)



    }
}