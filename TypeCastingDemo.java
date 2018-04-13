class Animal {
    void walk() {
        System.out.println("walking");
    }
}

class Dog extends Animal {
    void talk() {
        System.out.println("barks");
    }
}
class TypeCastingDemo {
    public static void main(String[] args) {
        Dog dog1 = new Dog();
        Animal dog2 = new Dog();           //true -- implicit casting
        Dog animal = (Dog) new Animal();   //false -- explicit casting

        animal.talk();
        animal.walk();
        Animal otherAnimal = new Animal();
                
        dog1 = (Dog) animal;
        dog1.talk();                       // -- false - animal cannot be cast to dog -runtime error
        dog1.walk();                       // -- false - animal cannot be cast to dog -runtime error
        
        int num1 = 1;
        float float1 = 3.0f;
        float float2 = num1;               // true implicit casting        
        System.out.println(float2);        // 1.0
        int num2 = (int) float1;           // true -- explicit casting
        System.out.println(num2);          // 3
    }
}

// auto
// int integer -- primitive aa object aa 
// unbox
// object -- primitive
// implicit explicit
