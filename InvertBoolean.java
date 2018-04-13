import static java.lang.System.out;

class InvertBoolean {
    public static void main(String[] args) {
        boolean flagValue = true;
        out.println("boolean Value is --" +flagValue);
        if(flagValue) {
            flagValue = !flagValue;
            out.println("Inverted boolean Value is --" +flagValue);
        }
    }
}