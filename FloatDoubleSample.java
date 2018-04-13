class FloatDoubleSample { 
	public static void main(String[] args) { 
		float floatVal = 12.6664287277627762f; 
		double doubleVal = 12.6664287277627762121212; 
		System.out.println(floatVal);   // 12.666429 -- float can handle upto 6 digits after decimal.
		System.out.println(doubleVal);  // 12.6664287277627762 -- double can handle upto 16 digits after decimal.
	} 
}