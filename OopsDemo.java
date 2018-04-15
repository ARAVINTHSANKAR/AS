import static java.lang.System.out;

interface Animal {
    int eyes = 2;
    void move();
}

class Dog implements Animal{
    public void move() {
        out.println("Dog is running");
    }
    void protect() {
        out.println("Dog is protecting me from thief");
    }
}

class Deer implements Animal {
    public void move() {
        out.println("Deer is jumping");
    }
    void eat() {
        out.println("Deer is eating grass");
    }
}

class Snake implements Animal {
    public void move() {
        out.println("Snake moves by serpentine movement");
    }
}

class OopsDemo {
    public static void main(String[] args) {
        Dog puppy = new Dog();
        puppy.move();
        puppy.protect();
        
        Deer fallow = new Deer();
        fallow.move();
        fallow.eat();
        
        Snake anaconda = new Snake();
        anaconda.move();
    }
}

// 1st checking syntax, loading libraries