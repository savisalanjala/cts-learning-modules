public class Main {
    public static void printObjectType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("Integer: " + i);
            case String s -> System.out.println("String: " + s);
            case Double d -> System.out.println("Double: " + d);
            case null -> System.out.println("Object is null");
            default -> System.out.println("Unknown type: " + obj);
        }
    }

    public static void main(String[] args) {
        printObjectType(123);
        printObjectType("Hello");
        printObjectType(45.67);
        printObjectType(true);
        printObjectType(null);
    }
}
