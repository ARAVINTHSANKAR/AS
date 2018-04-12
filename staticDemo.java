import static java.lang.System.out;

class StaticDemo {
    static int num = 10;
    static void staticMethod() {
        out.println("Method from outerClass");
        out.println(num);
    }
    public static void main(String[] args) { 
    StaticDemo.staticMethod();
    }
}
