import static java.lang.System.out;
import java.io.*;

class ExceptionHandlingDemo {
    
    void readTextFile() throws CustomExceptionDemo {        
        String line = null;
        String filePath = "D:\\dev\\training\\currentTraining\\codes\\Alphabet.txt";
        try {
            FileReader fileReader = new FileReader(filePath);
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            while((line = bufferedReader.readLine()) != null) {
                out.println(line);
            }
            bufferedReader.close();
        } catch(FileNotFoundException err) {
            // out.println("FileNotFoundException " +err);
            throw new CustomExceptionDemo("file not found");
        } catch (IOException err) {
            // out.println("IOException " +err);
            throw new CustomExceptionDemo("io exception");
        }
    }
    
    public static void main(String[] args) {
        ExceptionHandlingDemo exceptionDemo = new ExceptionHandlingDemo();
        try {
            exceptionDemo.readTextFile();
        } catch(Exception er) {
            out.println("Some Error" +er);
        }
    }
}

// FileReader --class for reading character files