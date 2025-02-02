class Soap {
    int x;
    int y;
}

class differenceBtwsReferenceAndheapMemory {
    public static void main(String[] args) {

        System.out.println("nothing");

        Soap s1 = new Soap();
        int s=0;
        System.out.println(s);
        System.out.println(s1.x + " " + s1.y);
        s1.x = 66;
        s1.y = 77;
        System.out.println(s1.x + " " + s1.y);

        Soap s2=s1;  
        s2.x=99;
        System.out.println(s1.x + " " + s1.y);         
    }
}
