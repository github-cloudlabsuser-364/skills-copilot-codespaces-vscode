//Define the calculator object
var calculator = {
    //Define the current value of the calculator
    currentValue: 0,

    //Add a number to the current value
    add: function(num) {
        this.currentValue += num;
    },

    //Subtract a number from the current value
    subtract: function(num) {
        this.currentValue -= num;
    },

    //Multiply the current value by a number
    multiply: function(num) {
        this.currentValue *= num;
    },

    //Divide the current value by a number
    divide: function(num) {
        this.currentValue /= num;
    },

    //Return the current value
    getCurrentValue: function() {
        return this.currentValue;
    },

    //Clear the current value
    clear: function() {
        this.currentValue = 0;
    },

};

//Test the calculator
calculator.add(5);
calculator.subtract(2);
calculator.multiply(3);
calculator.divide(2);
calculator.getCurrentValue(); //Returns 6
calculator.clear();

