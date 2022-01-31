import processing.core.PApplet;
public class FourBalls extends PApplet {
    Ball ball1;
    Ball ball2;
    Ball ball3;
    Ball ball4;
    int width=1080;
    int height=720;

    public static void main(String[] args){
        PApplet.main("FourBalls",args);
    }

    @Override
    public void settings() {
        size(width,height);
        ball1 = new Ball(this, 20,0,height/5, 1);
        ball2=new Ball(this,20,0,(height*2)/5,2) ;
        ball3=new Ball(this,20,0,(height*3)/5,3) ;
        ball4=new Ball(this,20,0,(height*4)/5,4) ;
    }

    @Override
    public void draw() {
       background(255);
       ball1.draw();
       ball1.increaseSpeed();
       ball2.draw();
       ball2.increaseSpeed();
       ball3.draw();
       ball3.increaseSpeed();
       ball4.draw();
       ball4.increaseSpeed();
    }
}
