import processing.core.PApplet;

public class Processing extends PApplet {


    public static final int WIDTH = 1080;
    public static final int HEIGHT = 720;
    public static final int DIAMETER = 20;
    int height1=HEIGHT * 1/ 5;
    int height2=HEIGHT * 2/ 5;
    int height3=HEIGHT * 3/5;
    int height4=HEIGHT * 4/5;
    int speed1=0;
    int speed2=0;
    int speed3=0;
    int speed4=0;


    public static void main(String[] args){
        PApplet.main("Processing",args);

    }

    @Override
    public void settings() {
        super.settings();
        size(WIDTH, HEIGHT);
    }

    @Override
    public void setup() {
//        super.setup();
//        ellipse(WIDTH/2,HEIGHT/2,100,100);
    }

    @Override
    public void draw() {

        ellipse(speed1,height1, DIAMETER, DIAMETER);
        speed1=speed1+1;
        ellipse(speed2,height2, DIAMETER, DIAMETER);
        speed2=speed2+2;
        ellipse(speed3,height3, DIAMETER, DIAMETER);
        speed3=speed3+3;
        ellipse(speed4,height4, DIAMETER, DIAMETER);
        speed4=speed4+4;

    }


}
