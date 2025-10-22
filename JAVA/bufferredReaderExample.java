import java.io.*;

public class bufferredReaderExample {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.println("enter a string");

        String s = br.readLine();
        System.out.println("Enter an integer");
        int x = Integer.parseInt(br.readLine());
        System.out.println("Your input string is " + s + "\nyour input integer is " + x);

    }

}