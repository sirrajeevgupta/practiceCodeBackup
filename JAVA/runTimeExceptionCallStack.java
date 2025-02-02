public class runTimeExceptionCallStack {

    public static void main(String args[]) {

        try {
            methodA();

            System.out.println("Exit main()");
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticException caught inside methodA");
            // e.printStackTrace();
        } finally {
            System.out.println("Finally of main()!");

        }
        System.out.println("try-catch ended! Life goes on...");
    }

    static void methodA() {
        System.out.println("methodA Started!");

        try {
            int a = 5, b = 0;
            int c = a / b;
            System.out.println(c);
        } finally {
            System.out.println("Finally of methodA!");

        }

        System.out.println("methodA Ended!");

    }
}
