class VarargsDemo {
    public void print(String array) {
        System.out.println(array);
        if(array == null) {
            System.out.println("No arguments found");
        }
        // for(String element: array) {
            // System.out.println(element);
        // }
    }

    public static void main(String[] args) {
        VarargsDemo varargsDemo = new VarargsDemo();
        String city = null;
        varargsDemo.print(city);
        // varargsDemo.print("sivakasi", "coimbatore", "chennai");
    }
}

class VarargsDemo {

    private void printCities(String... cities) {
        if (cities.length == 0) {
            throw new RuntimeException("Usage: java VarargsDemo <cities>");
        }
        for(String city: cities) {
            System.out.println(city);
        }
    }
    
    private void run(String... args) {
        printCities(args);
    }

    public static void main(String[] args) {
        VarargsDemo varargsDemo = new VarargsDemo();
        varargsDemo.run(args);
    }
} 