import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;
public class compileTimeException {

    public static void main(String args[]){
        
        try{
            
            Scanner x = new Scanner(new File("test.in"));
            x.close();
        }
        catch(FileNotFoundException e){
            System.out.println("Exception has been caught of type FileNotFoundException");
        }
        finally{
            System.out.println("This is my finally statement");
        }

        System.out.println("try-catch has ended. This is the end of the program.");
    }
    
}
