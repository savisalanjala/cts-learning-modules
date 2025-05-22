import java.util.ArrayList;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> studentNames = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);
        String name;

        System.out.println("Enter student names (type 'exit' to stop):");
        while (true) {
            name = scanner.nextLine();
            if (name.equalsIgnoreCase("exit")) {
                break;
            }
            studentNames.add(name);
        }

        System.out.println("Student names entered:");
        for (String student : studentNames) {
            System.out.println(student);
        }

        scanner.close();
    }
}
