import java.lang.reflect.*;
import static java.lang.System.out;

class TargetClass{
    public void sampleMethod() {
        out.println("its a sampleMethod from TargetClass");
    }
}

class GetClassInstance{
    // gets the instance of a class
    public static void main(String[] args) {
        try {
            Class classObj = Class.forName("TargetClass");
            TargetClass targetClass = (TargetClass)classObj.newInstance();
            targetClass.sampleMethod();
        } catch(Exception e){
            System.out.println(e);
          }        
     }  
}