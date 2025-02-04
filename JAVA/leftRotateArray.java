
public class leftRotateArray {
    public static void main(String[] args) {
        int arr[] = { 1, 2, 3, 4, 5 };
        int i;
        int temp = arr[0];
        for (i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1];
        }

        arr[arr.length - 1] = temp;
        System.out.println("\nArrayRotated to left is\n");
        for (i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
        }
    };
}
