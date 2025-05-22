public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;
        int result2 = (10 + 5) * 2;
        int result3 = 100 / 5 + 10 - 3;
        int result4 = 8 + 2 * (15 - 5);
        System.out.println("Result 1 (10 + 5 * 2): " + result1);
        System.out.println("Result 2 ((10 + 5) * 2): " + result2);
        System.out.println("Result 3 (100 / 5 + 10 - 3): " + result3);
        System.out.println("Result 4 (8 + 2 * (15 - 5)): " + result4);
    }
}
