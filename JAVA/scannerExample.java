import java.util.Scanner;

public class scannerExample{

    public static void main(String args[]){

        Scanner sc = new Scanner(System.in);

        System.out.println("Please enter a string, an integer and a floating point value:");
        String s=sc.nextLine();
        Integer x=sc.nextInt();
        float f=sc.nextFloat();
        sc.close();

        System.out.println("Entered values are as follows: \nString: "+s+"\nInteger: " + x+ "\nFloat: "+f);
    }

}