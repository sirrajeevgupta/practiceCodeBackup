class Point {
    int x;
    int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void print() {
        System.out.println("x: " + x + "\ny: " + y);
    }
}

public class thisKeyword {

    public static void main(String[] arg) {

        Point p1 = new Point(10, 20);
        p1.print();
    }
}
