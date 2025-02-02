import java.util.Scanner;

public class bubbleSorting {

    public static void bubbleSort(int arr[]) {

        int length = arr.length, temp;

        // 0 1 2 3 4 5 6 7

        for (int i = 0; i < length - 1; i++) {
            for (int j = 0; j < length - i - 1; j++) {

                if (arr[j] > arr[j + 1]) {

                    temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the array length:");
        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter an array:");

        for (int i = 0; i < n; i++) {

            arr[i] = sc.nextInt();
        }
        bubbleSort(arr);

        System.out.println("Please find below the sorted array, sorted using bubble sort:");

        for (int i = 0; i < n; i++) {

            System.out.print(arr[i] + " ");
        }

        sc.close();
    }
}
