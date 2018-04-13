import java.lang.reflect.*;
import static java.lang.System.out;
import java.lang.Object;
import java.lang.Class;

class Demo {
    void sampleMethod() {
        out.println("sample method from demo class");
    }
}

class JavapDemo {
    public static void main(String[] args) {
        Class dynamicClass = null;
        Method declaredMethods[] = null;
        int count;
        try {
        dynamicClass = Class.forName(args[0]);            // class args[0] -- class reference       
        String className = dynamicClass.getName();        // args[0] -- class Name
        Demo demo = (Demo) dynamicClass.newInstance();    // creates instance -- working fine
        demo.sampleMethod();
        } catch(Exception e) {
            out.println("Class could not be found");
          }
        
        declaredMethods = dynamicClass.getDeclaredMethods();
        for( count = 0; count < declaredMethods.length; count++ ) {
            out.println(declaredMethods[count]);            
        }
        // dynamicClass.newInstance().sampleMethod(); -- cannot find symbol
        // Object obj = dynamicClass.newInstance();
    }
}
