import java.util.*;
import java.io.*;

public class multipleExceptions {
    public static void main(String[] args) {

        try {

            methodA();
            Scanner sc = new Scanner(new File("test.in"));
            sc.close();

            System.out.println("Exit try block");
        } catch (ArithmeticException e) {

            System.out.println("ArithmeticException caught...");
        } catch (FileNotFoundException e) {

            System.out.println("FileNotFoundException caught...");
        } catch (Exception e) {

            System.out.println("An unknown exception caught...");
        } finally {
            System.out.println("Finally inside main ends..");
        }

        System.out.println("try-catch ends, life goes on...");

    }

    public static void methodA() {

        System.out.println("Enter methodA()");

        try {

            System.out.println(1 / 0);
        } finally {

            System.out.println("Finally inside methodA()");
        }

        System.out.println("Exit methodA()");
    }
}
