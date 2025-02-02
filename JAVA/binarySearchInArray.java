import java.util.*;

public class binarySearchInArray {

    public static void main(String [] args){

        Scanner sc= new Scanner(System.in);

        System.out.println("Enter the array length:");
        int n= sc.nextInt();
        int arr[]=new int[n];

        System.out.println("Enter a sorted array:");

        for(int i=0; i<n;i++){

            arr[i]=sc.nextInt();            
        }

        System.out.println("Enter the array element you wish to search:");
        int x= sc.nextInt();

        int result=binarySearch(arr, 0, (n-1), x);
        
        if(x<0)
        System.out.println("Entered element not found in the array.");
        else
        System.out.println("Entered element found at "+ (result+1) +" in the array.");

        sc.close();
    }

    public static int binarySearch(int arr[], int l, int r, int x){

        int m= l+ (r-1)/2;

        if(arr[m]==x)
        return m;

        if(arr[m]<x)
        return binarySearch(arr, m+1, r, x);
        
        if(arr[m]>x)
        return binarySearch(arr,l,m-1,x);

        return -1;
    }
}
