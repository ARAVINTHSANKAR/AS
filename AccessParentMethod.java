class Parent {
    public String talk() {
        return "talking";
    }
}

class AccessParentMethod extends Parent {
    @Override
    public String talk() {
        System.out.println(super.talk());
        return "singing";
    }
    public static void main(String[] args) {
        AccessParentMethod accessParentMethod = new AccessParentMethod();
        System.out.println(accessParentMethod.talk());
    }
}
