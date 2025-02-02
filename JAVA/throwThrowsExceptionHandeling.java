import java.util.*;

public class throwThrowsExceptionHandeling {

    public static void main(String[] args) {

        try {

            methodA();
            System.out.println("Exiting try block");
        } catch (ArithmeticException e) {

            System.out.println("ArithmeticException caught...");
            e.printStackTrace();
        }

        System.out.println("Exiting main method...");
    }

    public static void methodA() throws ArithmeticException {

        Scanner in = new Scanner(System.in);

        System.out.println("Enter the value of divider:");

        Integer a = 5, b, c;
        b = in.nextInt();
        in.close();

        if (b == 0) {

            throw new ArithmeticException();
        } else {
            c = a / b;
            System.out.println("Division of " + a + " by " + b + " is: " + c);
        }        

        System.out.println("Exiting methodA");
    }
}
