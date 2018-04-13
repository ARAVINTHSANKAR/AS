// trying to access a static method which is using a instance variable

class StaticMethodWithInstanceVariable {
	int instanceVariable = 200;
	static int staticMethod() {
		return instanceVariable;
	}
	public static void main(String []args) {
		System.out.println(StaticMethodWithInstanceVariable.staticMethod());
	}
}

// Expected output - err:  non-static variable instanceVariable cannot be referenced from a static context
