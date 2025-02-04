import java.util.Scanner;

public class deleteElemntFromArray {

    public static void main(String[] args) {

        int idx = 0;
        System.out.println("\nEnter an array of 4 elements");

        Scanner sc = new Scanner(System.in);

        int arr[] = new int[4];

        for (int i = 0; i < 4; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.println("Enter element to be deleted from array");

        Integer x = sc.nextInt();

        for (int i = 0; i < 4; i++) {
            if (arr[i] == x)
                idx = i;
        }

        if (idx != -1) {
            for (int i = idx; i < 3; i++) {
                arr[i] = arr[i + 1];
            }
        }
        System.out.println("New array is:");
        for (int i = 0; i < 3; i++) {
            System.out.println(arr[i]);
        }

    }

}
