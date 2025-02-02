public class commonStringMethods {

public static void main(String []args){

    String s1="Hello";
    String s2="World";
    String s3="hello";


    int length = s1.length();
    System.out.println("length of s1 is: "+length);

    String s4 = s2.toUpperCase();
    System.out.println("toUpperCase value of s2 is: "+s4);
    
    String s5 = s1+s2;
    System.out.println("Sum of s1 & s2 is: '"+s5+"'");

    boolean emptyOrNot = s5.isEmpty();
    System.out.println(emptyOrNot);

    boolean equalOrNot = s1.equals(s3);
    System.out.println("s1 equals s3 result: "+equalOrNot);

    boolean equalOrNotWithCase = s1.equalsIgnoreCase(s3);
    System.out.println("s1 equalsIgnoreCase s3 result: "+equalOrNotWithCase);

    int index = s5.indexOf("W");
    System.out.println(index);

    int lastIndexOf = s5.lastIndexOf("l");
    System.out.println(lastIndexOf);

    char charAt = s5.charAt(9);
    System.out.println("charAt value: "+charAt);

    String substring = s5.substring(1);
    System.out.println("substring value: "+substring);

    String s6 = s4.toLowerCase();
    System.out.println("toLowerCase value of s4 is: "+s6);

    String s7 = s1.concat(s3);
    System.out.println("concat of s1 & s3 is: "+s7);

    char[] s8 = s5.toCharArray();
    System.out.println(s8);
}
    
}
