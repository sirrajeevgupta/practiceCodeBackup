class InvalidBalanceException extends Exception{
    public InvalidBalanceException(String message){
       super(message);

   }
}
public class userDefinedException {

    public static void main(String []args){
        int balance;
        

        try{
            balance = Integer.parseInt(args[0]);
            updateBalance(balance); 
        }
        catch(InvalidBalanceException e){
            System.out.println("Caught in catch of InvalidBalanceException");
            e.printStackTrace();
        }
        catch(NumberFormatException e){
            System.out.println("Caught in catch of NumberFormatException");
            e.printStackTrace();
        }
        catch(Exception e){
            System.out.println("Caught in catch of unknow Exception");
            e.printStackTrace();
        }
        finally{
            System.out.println("try-catch ends...");
        }
    }

    public static void updateBalance(int x) throws InvalidBalanceException{
        if(x<0)
        throw new InvalidBalanceException("The entered balance amount is invalid");
        else
        System.out.println("Entered amount is: "+ x);
    } 
}