class Chain{
    constructor(body1,point2){
        var options={
            bodyA: body1,
            pointB: point2,
            length: 20,
            stiffness: 0.6,
        }

        this.chain= Matter.Constraint.create(options)

        World.add(world,this.chain);
    }
      display(){
        if(this.chain.bodyA){
        strokeWeight(5);
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.pointB
        line (pointA.x,pointA.y,pointB.x,pointB.y);
      }}

      fly(){
        this.chain.bodyA=null;
      }
}
