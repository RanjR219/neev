import processing.core.PApplet;

public class Ball {
    int diameter;
    int y;
    int x;
    int xspeed;
    PApplet FourBalls;

    public Ball(PApplet FourBalls, int initDiameter, int initx, int inity,int speed) {
        this.FourBalls=  FourBalls;
        this.diameter = initDiameter;
        this.x = initx;
        this.y = inity;
        this.xspeed=speed;
    }

    public void increaseSpeed(){
        this.x=this.x+this.xspeed;
    }

    public void draw() {
        FourBalls.ellipse(this.x,this.y,this.diameter,this.diameter);
    }
}
          
          