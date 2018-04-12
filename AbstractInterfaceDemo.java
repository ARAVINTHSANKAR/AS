import static java.lang.System.out;

interface CommonActivities {
    void move();
}

interface childInterface extends CommonActivities {
    void run();
}

abstract class SomeCommonActivities {
   abstract void fly();
    void talk() {
        out.println("talking");
    }
}

abstract class childAbstract implements CommonActivities {
    void swim() {
        out.println("its swimming");
    }
}

class AbstractInterfaceDemo implements childInterface{
    public void move() {
        out.println("move method from interface commonActivities");
    }
    public void run() {
        out.println("run method from Child interface which extends interface commonActivities");
    }
    public static void main(String[] args) {
        AbstractInterfaceDemo obj = new AbstractInterfaceDemo();
        obj.move();
        obj.run();       
    }
}

// All methods in interface are implicitly public. But inside a class if public is not mentioned explicitly, it has only package visibility. Through overriding, you can only increase visibility. You cannot decrease visibility. 