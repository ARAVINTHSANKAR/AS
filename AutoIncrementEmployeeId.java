import static java.lang.System.out;

class Employee {
    int employeeId;
    String employeeName;
    public Employee(String someName, int id) {
        this.employeeName = someName;      
        this.employeeId = id;
        printEmployee();
    }
    void printEmployee() {
        out.println(employeeName +" "+ employeeId);
    }
}

class AutoIncrementEmployeeId {
    public static void main(String[] args) {
        int count;        
        Employee employee;
        for( count = 1; count <= 10; count++ ) {
            employee = new Employee("employee", count);
        }        
    }
}