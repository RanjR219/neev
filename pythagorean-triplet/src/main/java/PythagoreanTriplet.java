import java.util.ArrayList;
import java.util.List;

public class PythagoreanTriplet {
    private int sum;
    private int sumMax;
    private int a;
    private int b;
    private int c;

    public PythagoreanTriplet() {
    }

    public PythagoreanTriplet(int a, int b, int c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    public static PythagoreanTriplet makeTripletsList() {
        return new PythagoreanTriplet();
    }
    public PythagoreanTriplet withFactorsLessThanOrEqualTo(int sumMax) {
        this.sumMax = sumMax;
        return this;
    }

    public PythagoreanTriplet thatSumTo(int sum) {
        this.sum = sum;
        return this;
    }
    public List<PythagoreanTriplet> build() {
        List<PythagoreanTriplet> result = new ArrayList<>();
        for (int i = 1; i <= sumMax; i++) {
            for (int j = i; j <= sumMax; j++) {
                for (int k = j; k <= sumMax; k++) {
                    if ((i + j + k) == sum) {
                        if (Math.pow(i, 2) + Math.pow(j, 2) == Math.pow(k, 2)) {
                            result.add(new PythagoreanTriplet(i, j, k));
                        }
                    }
                }
            }
        }
        return result;
    }
    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        PythagoreanTriplet other = (PythagoreanTriplet) obj;
        if ((this.a == other.a) && (this.b == other.b) && (this.c == other.c)) {
            return true;
        }
        return false;
    }
}


/*

Since this exercise has a difficulty of > 4 it doesn't come
with any starter implementation.
This is so that you get to practice creating classes and methods
which is an important part of programming in Java.

Please remove this comment when submitting your solution.

*/
