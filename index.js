//Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
//Use at least one array.
//Use at least two classes.
//Your menu should have the options to create, view, and delete elements.


class Car {
    //constructor creates and initializes an instance of a class
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
}

class Menu {
    constructor() {
        this.cars = [];
    }

    // Method to add a car
    addCar() {
        let carMake = prompt("Enter car make:");
        let carModel = prompt("Enter car model:");
        this.cars.push(new Car(carMake, carModel));
    }

    // Method to delete a car
    deleteCar() {
        let carIndex = prompt("Enter car index to DELETE:");
        // Ensure the index is a number and within bounds
        carIndex = parseInt(carIndex);
        if (carIndex >= 0 && carIndex < this.cars.length) {
            //starting index and # of elements to remove
            this.cars.splice(carIndex, 1);
        } else {
            alert("Invalid index.");
        }
    }

    // Method to view all cars
    viewCars() {
        let displayCars = "";
        for (let i = 0; i < this.cars.length; i++) {
            //template literals
            displayCars += `${i}: ${this.cars[i].make} ${this.cars[i].model}\n`;
        }
        alert(displayCars);
    }

    // Show the main menu
    showMainMenu() {
        return prompt(`
            Main Menu:
            0. Exit Menu
            1. Add Car
            2. Delete Car
            3. View all cars`);
    }

    // Start the menu
    start() {
        let selection = this.showMainMenu();
        while (selection !== "0") {  // Exit when '0' is selected
            switch (selection) {
                case "1":
                    this.addCar();
                    break;
                case "2":
                    this.deleteCar();
                    break;
                case "3":
                    this.viewCars();
                    break;
                default:
                    alert("Invalid selection, please try again.");
                    break;
            }
            selection = this.showMainMenu();
        }
        alert("Exiting Menu... Goodbye");
    }
}

// Instantiate Menu and interact with it
let menu = new Menu();
menu.start();
