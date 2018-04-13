import java.lang.Object;
import java.lang.reflect.*;
import static java.lang.System.out;

class TargetClass{
    public void sampleMethod() {
        out.println("its a sampleMethod from TargetClass");
    }
}  

class GetClassReference{
        /** 
          * there are 3 ways to get a reference of a class
          * 1. forName("className")
          * 2. getClass()
          * 3. .class
          */      
      void getClassReferenceMethod(Object object){
          Class class2 = object.getClass();
          out.println("Class.getClass()" +" "+class2.getClass()); // class TargetClass--gives reference of the class
      }
      
      public static void main(String[] args){
          try {
              Class class1 = Class.forName("TargetClass");
              out.println("Class.forName" +" "+ class1); // class TargetClass --gives reference of the class
          } catch(Exception e) {
                out.println(e); 
            }
            
          TargetClass targetClass = new TargetClass();  
          GetClassReference getClassReference = new GetClassReference();
          getClassReference.getClassReferenceMethod(targetClass);

          Class class3 = TargetClass.class;
          out.println("Class.getClass()" +" "+class3); // class TargetClass --gives reference of the class         
     }  
}  