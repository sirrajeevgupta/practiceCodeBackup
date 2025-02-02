public class finalKeyword {

    final int globalVariable; // Instance Final // Necessary to give some value here
    {
        // globalVariable = 500;
    }

    static final int MAX = 200; // Class or Static Final
    static final int AREA;
    static {
        AREA = 400;
    }

    finalKeyword() {
        globalVariable = 900; // initializing through a constructor
    }

    public static void main(String args[]) {
        final int localVariable = 100;
        System.out.println(localVariable);
        // localVariable=200; Will throw error
        System.out.println(localVariable);

        finalKeyword fk = new finalKeyword();
        System.out.println(fk.globalVariable);
        System.out.println(MAX);
        System.out.println(AREA);

        final StringBuffer name = new StringBuffer("Rajeev"); // rference value can be changed
        name.append(" Gupta");
        System.out.println(name);

    }
}