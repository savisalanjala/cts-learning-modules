import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Mango");
        fruits.add("Orange");

        Collections.sort(fruits, (s1, s2) -> s1.compareToIgnoreCase(s2));

        for (String fruit : fruits) {
            System.out.println(fruit);
        }
    }
}
