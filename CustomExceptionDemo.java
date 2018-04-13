import java.lang.Exception;
import static java.lang.System.out;

class CustomExceptionDemo extends Exception {
    CustomExceptionDemo(String err) {
        if(err == "file not found") {
            out.println("Please specify the available file to read");
        } else if(err == "io exception") {
            out.println("streaming error");
        }
    }
}