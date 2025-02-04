import java.util.*;

public class arrays {
    public static void main(String[] args) {

        // below are the ways of array declaration
        /*
         * int arr [];
         * int [] brr;
         * int c[] = new int[5];
         * int ar [] ={1,2,3,4,5};
         * System.out.println(ar[0]);
         * System.out.println(ar.length);
         */

        System.out.println("Please enter no. of items");
        Scanner sc = new Scanner(System.in);
        int length = sc.nextInt();
        int arr[] = new int[length];

        for (int i = 0; i < length; i++) {

            arr[i] = sc.nextInt();
        }

        System.out.print("[");

        for (int i = 0; i < length; i++) {

            System.out.print(arr[i]);
            if (i != length - 1)
                System.out.print(",");
        }

        System.out.print("]");
        sc.close();
    }
}
