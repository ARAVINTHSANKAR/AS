import static java.lang.System.out;

// if a class is needed to only one class then its better to make it as nested class

class OuterClass {

    static int staticVar = 10;
    private String privateString = "privateString";
    
    InnerClass innerClass = new InnerClass();
    
    void outerClassMethod() {
        out.println("Method from outerClass");
    }
    static class StaticNestedClass {
        static void staticNestedClassMethod() {
            out.println("Method from staticNestedClass");
            // out.println("its a " +privateString); //  non-static variable privateString cannot be referenced from a static context
        }        
    }
    
    static class OtherStaticNestedClass {
        OuterClass out = new OuterClass();
        static void otherStaticNestedClassMethod() {
            out.println("Method from otherStaticNestedClass");
            out.println("its a " +out.privateString); //  non-static variable privateString cannot be referenced from a static context
        }        
    }
    
    class InnerClass {
        void innerClassMethod() {
            out.println("Method from innerClass");
            out.println("its a " +privateString);
        }
    }
    
    public static void main(String[] args) {
        OuterClass outerClass = new OuterClass();
        outerClass.outerClassMethod();
        out.println("Static var in outerClass : " +OuterClass.staticVar);
        OuterClass.StaticNestedClass.staticNestedClassMethod();
        outerClass.innerClass.innerClassMethod();
    }
}