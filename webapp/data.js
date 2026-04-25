const courseData = [
    {
        id: 'intro',
        title: 'INTRODUCTION',
        icon: 'fa-info-circle',
        content: `
            <p><strong>Object-Oriented Programming (OOP)</strong> is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).</p>
            <p>In Java, everything is an Object. Java is closely tied to OOP concepts which makes it a powerful language for building complex, scalable software.</p>
        `,
        uml: `
        classDiagram
            class ProgrammingParadigm {
                +Procedural
                +Functional
                +ObjectOriented
            }
        `,
        code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Welcome to OOP in Java!");
    }
}`,
        quiz: {
            question: "What is the core concept of Object-Oriented Programming?",
            options: [
                "Writing functions step by step",
                "Using objects that contain data and methods",
                "Working only with mathematical formulas",
                "Using only global variables"
            ],
            correct: 1
        }
    },
    {
        id: 'classes',
        title: 'CLASSES & OBJECTS',
        icon: 'fa-layer-group',
        content: `
            <p>A <strong>Class</strong> is a blueprint or template from which objects are created. It defines the properties and methods that the objects will have.</p>
            <p>An <strong>Object</strong> is a real-world entity that has state and behavior. It is an instance of a class.</p>
        `,
        uml: `
        classDiagram
            class Car {
                +String color
                +String model
                +drive()
                +brake()
            }
        `,
        code: `class Car {
    String color = "Red";
    
    public void drive() {
        System.out.println("The car is driving.");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Object creation
        System.out.println(myCar.color);
        myCar.drive();
    }
}`,
        quiz: {
            question: "Which keyword is used to create an object in Java?",
            options: ["class", "object", "new", "create"],
            correct: 2
        }
    },
    {
        id: 'inheritance',
        title: 'INHERITANCE',
        icon: 'fa-diagram-project',
        content: `
            <p><strong>Inheritance</strong> is a mechanism in which one object acquires all the properties and behaviors of a parent object.</p>
            <p>It is an important part of OOP as it provides code reusability. The class which inherits the properties of other is known as subclass (derived class, child class) and the class whose properties are inherited is known as superclass (base class, parent class).</p>
        `,
        uml: `
        classDiagram
            Animal <|-- Dog
            class Animal {
                +eat()
            }
            class Dog {
                +bark()
            }
        `,
        code: `class Animal {
    public void eat() {
        System.out.println("I can eat");
    }
}

class Dog extends Animal {
    public void bark() {
        System.out.println("I can bark");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog1 = new Dog();
        dog1.eat(); // Inherited method
        dog1.bark();
    }
}`,
        quiz: {
            question: "Which keyword is used for inheritance in Java?",
            options: ["implements", "inherits", "extends", "super"],
            correct: 2
        }
    },
    {
        id: 'polymorphism',
        title: 'POLYMORPHISM',
        icon: 'fa-people-group',
        content: `
            <p><strong>Polymorphism</strong> means "many forms", and it occurs when we have many classes that are related to each other by inheritance.</p>
            <p>It allows us to perform a single action in different ways. <em>Method Overriding</em> is a perfect example where a child class provides a specific implementation of a method that is already provided by its parent class.</p>
        `,
        uml: `
        classDiagram
            Animal <|-- Dog
            Animal <|-- Cat
            class Animal {
                +makeSound()
            }
            class Dog {
                +makeSound()
            }
            class Cat {
                +makeSound()
            }
        `,
        code: `class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal myPet = new Dog();
        myPet.makeSound(); // Polymorphism in action
    }
}`,
        quiz: {
            question: "What is dynamic dispatch in Java?",
            options: [
                "Sending emails dynamically",
                "Mechanism by which a call to an overridden method is resolved at runtime",
                "Calling multiple methods at once",
                "A type of compile-time error"
            ],
            correct: 1
        }
    },
    {
        id: 'encapsulation',
        title: 'ENCAPSULATION',
        icon: 'fa-shield-halved',
        content: `
            <p><strong>Encapsulation</strong> is the mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit.</p>
            <p>In encapsulation, the variables of a class will be hidden from other classes, and can be accessed only through the methods of their current class. Therefore, it is also known as data hiding.</p>
        `,
        uml: `
        classDiagram
            class Person {
                -String name
                -int age
                +getName() String
                +setName(String)
            }
        `,
        code: `class Person {
    private String name; // hidden variable

    public String getName() {
        return name;
    }

    public void setName(String newName) {
        this.name = newName;
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person();
        p.setName("John");
        System.out.println(p.getName());
    }
}`,
        quiz: {
            question: "How do you hide data in Encapsulation?",
            options: [
                "By using protected variables",
                "By not writing any methods",
                "By using private access modifiers",
                "By deleting the class file"
            ],
            correct: 2
        }
    }
];

// Export for main.js
window.courseData = courseData;
