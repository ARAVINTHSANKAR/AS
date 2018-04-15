class Rectangle{
    int width, height;
    int area() {
       return width*height; 
    }
}

public class SomethingIsWrong {
    public static void main(String[] args) {
        Rectangle myRect = new Rectangle();
        myRect.width = 40;
        myRect.height = 50;
        System.out.println("myRect's area is " + myRect.area());
    }
}

//cannot find symbol Rectangle -- fix - Line1
// cannot find symbol myRect.width -- fix - Line2
// cannot find symbol myRect.height -- fix - Line2
// cannot find symbol myRect.area() -- fix - Line3
//  error: variable myRect might not have been initialized fix -- Line10