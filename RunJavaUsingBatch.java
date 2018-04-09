import java.lang.Runtime;
import static java.lang.System.out;

class RunJavaUsingBatch {
    public static void main(String[] args) {
        String filePath = "D:\\dev\\codes\\prasanaTraining\\RunHelloWorld.bat";        
        try {
            Process p = Runtime.getRuntime().exec(filePath);
        } catch (Exception e) {
            out.println(e);
        }
    }
}