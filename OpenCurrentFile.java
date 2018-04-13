import java.lang.Runtime;
import java.lang.Process;
import java.io.File;
import java.util.Scanner;

// opens the user mentioned source file in notepad++
class OpenCurrentFile {
    public static void main(String []args) {
        String appPath = "D:\\tools\\Notepad++\\notepad++.exe";
        String a = "\\\\";
        String b = "\\";

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a java File Name to open");
        String fileName = sc.next();

        File javaFile = new File(fileName+".java");
        String javaFilePath = javaFile.getAbsolutePath();

        String path = appPath+" "+javaFilePath;
        Runtime runtime = Runtime.getRuntime();

        String completePath = path.replace(b, a);
        System.out.println(completePath);
        try {
            Process p = runtime.exec(completePath);
        } catch(Exception err) {
            System.out.println(err);
        }
    } 

}