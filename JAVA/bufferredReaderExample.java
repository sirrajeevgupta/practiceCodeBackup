import java.io.*;

public class bufferredReaderExample {

    public static void main(String[] args) throws IOException {

        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("Enter a string");
        String s = br.readLine();
        System.out.println("Entered string value is " + s);
        System.out.println("Please enter an integer");
        int x = Integer.parseInt(br.readLine());
        System.out.println("Entered integer value is " + x);
        System.out.println("Enter a floating value");
        float f = Float.parseFloat(br.readLine());
        System.out.println("Entered float value is "+ f);
    }
}
