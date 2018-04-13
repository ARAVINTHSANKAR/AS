/** 
  * + print the type of the result value of following expressions
  * - 100 / 24     =  4     --  int     // divide gives us the quotient
  * - 100.10 / 10  =  10.01 --  float
  * - 'Z' / 2      =  12    --  integer // becoz ascii value of z is 122 so 122/10
  * - 10.5 / 0.5   =  21.0  --  float
  * - 12.4 % 5.5   =  1.4000000000000004 -- double 
  * - 100 % 56     =  44    -- integer  // % modulo gives us the reminder
  */
  
class DetermineType {
    public static void main(String []args) {
        System.out.println(12.4%5.5);
    }
}
  