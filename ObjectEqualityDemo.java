class ObjectEqualityDemo {
    public static void main(String[] args) {
        String str1 = "aravinth";
        String str2 = "Aravinth";
        if( str1.equals(str2) ) {
            System.out.println("true from equals api");
        } else {
            System.out.println("false from equals api");
        }

        if( str1.equalsIgnoreCase(str2) ) {
            System.out.println("true from == operator");
        } else {
            System.out.println("false from == operator");
        }        
        
        if( str1 == str2 ) {
            System.out.println("true from == operator");
        } else {
            System.out.println("false from == operator");
        }        
        
    }
}

/**
  * primitive types cannot be compared using equals/ equalsIgnoreCase api as it only checks for objects
  * == operator cannot be overridden as java doesnot support user defined operator overriding but
    the above other api can be overridden as per our requirements
  */
  
  
  /* Main difference between == and equals in Java is that "==" is used to compare primitives while equals() method is recommended to check equality of objects. Another difference between them is that, If both "==" and equals() is used to compare objects than == returns true only if both references points to same object while equals() canreturn true or false based on its overridden implementation.One of the popular cases is comparing two String in Java in which case == and equals() method return different results.
 */