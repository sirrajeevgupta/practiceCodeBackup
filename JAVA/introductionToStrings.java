public class introductionToStrings {
    public static void main(String []args){

        //string literal objects share the same location if the value is same, which is not the case in objects
        // strings are INMUTABLE because any changes done in one common pool object will cause change in other refernces pointing to it.

        String s1="Hello";      //create a string literal, where s1 is the string literal and is referencing to "Hello" in common pool
        String s2="Hello";      //create another string literal s2, which is referencing to the same location (of "Hello") in common pool
        String s3=s1;       //creates another strng literal s3, which is again referencing to same location (of "Hello") in common pool

        String s4= new String("Hello");     //creates an object in stack referencing to memory of "Hello" created in heap
        String s5 = new String ("Hello");       //creates a new object in stack which refers to a different memroy in heap containing data "Hello"
        
        System.out.println(s1==s2);     //Relational operator '==' compares the memory location, in this case returns true
        System.out.println(s1==s3);     //T
        System.out.println(s1.equals(s3));      // '.equals' function compares the contents, in this case retuns true

        System.out.println(s1==s4);     //false, as location is different
        System.out.println(s1.equals(s4));      //true, as content is same
        System.out.println(s4==s5);     //false, as location us different


        

    }
    
}
