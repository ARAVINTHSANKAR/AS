import static java.lang.System.out;

/** 
 * Enum is used to initialize constant variables
 * Object cannot be created for this class because it has private constructor
 */
 
enum Days {
    Monday, Tuesday, Wed, Thurs, Fri, Sat, Sun;
    static void getDay() {
        out.println("Today is tuesday");
    }
}
enum SomeWords {
    Doll, Baby, Cat, Wed, Monday;
}
class EnumDemo {
    public static void main(String[] args) {
        Days day1 = Days.Monday;                // Monday
        out.println(day1);
        Days.getDay();
        SomeWords someWord = SomeWords.Monday;
        // someWord == day1                     // compile time error -- error: incomparable types
        if( someWord.equals(day1) ) {           // not equal 
            out.println("days are equal");
        } else {
            out.println("days are not equal");
        }
    }
}