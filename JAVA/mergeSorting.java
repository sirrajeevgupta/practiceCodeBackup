import java.util.Scanner;

public class mergeSorting {

    public static void sorting(int arr[], int l, int r){

    }

    public static void main(String [] args){

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the array length:");
        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter an array:");

        for (int i = 0; i < n; i++) {

            arr[i] = sc.nextInt();
        }
        sorting(arr,0, n);

        System.out.println("Please find below the sorted array, sorted using bubble sort:");

        for (int i = 0; i < n; i++) {

            System.out.print(arr[i] + " ");
        }

        sc.close();
    }
}
