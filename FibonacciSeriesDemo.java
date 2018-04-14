import static java.lang.System.out;
import java.util.Scanner;

class FibonacciSeriesDemo {
    static int num = 1;
    void printFibonacciSeriesUsingForLoop(int userCount) {
        int count;
        for(count = 0; count <= userCount; count++) {
            out.print(num +" ");
            num += num; 
        }
    }
    
    void printFibonacciSeriesUsingWhileLoop(int userCount) {
        while(userCount >= 0) {
            out.print(num +" ");
            num += num;
            userCount--;
        }
    }
    
    void printFibonacciSeriesUsingRecursion(int userCount) {
        out.print(num + " ");
        num += num;
        if(userCount == 0) {
            return;
        } else {
            userCount--;
            printFibonacciSeriesUsingRecursion(userCount);
        }
    }
    
    public static void main(String[] args) {
    FibonacciSeriesDemo fibonacci = new FibonacciSeriesDemo();
        Scanner scanner = new Scanner(System.in);
        out.println("Enter the Count of fibonacci to print");
        int userCount = scanner.nextInt();
        if (userCount <= 0) {
            out.println("Enter valid number");
        } else {
            out.println("Select type of method");
            out.println("1 -- For Loop");
            out.println("2 -- While Loop");
            out.println("3 -- Recursive");
            
            int choice = scanner.nextInt();
            
            switch(choice) {
                case 1: out.println("work done by for loop");
                        out.print("1" + " ");
                        fibonacci.printFibonacciSeriesUsingForLoop(userCount - 2);
                        break;
                case 2: out.println("work done by while loop");
                        out.print("1" + " ");
                        fibonacci.printFibonacciSeriesUsingWhileLoop(userCount - 2);
                        break;
                case 3: out.println("work done by Recursive");
                        out.print("1" + " ");
                        fibonacci.printFibonacciSeriesUsingRecursion(userCount - 2);
                        break;
            default: out.println("Enter valid choice");
            }
        }
    }
}