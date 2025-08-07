# Odin Project Calculator 2.0

My second go at the final project of the intro section of Odin Project.

EDIT: Finished basic functionality of the project on August 6, 2025.


# Approach

## Layout
I hardcoded all the divs for the buttons instead of using javascript since there I cannot think of an iterative way to generate all the numerical and non-numerical buttons in one go. To arrange the buttons and display in a grid-like fashion (without using CSS grid), I used flexbox.

## Calculator Behaviour
My idea was to create interfaces for handling what goes to the display and for keeping track of the calculator inputs. I defined two objects `displayManager` and `calcManager`. The `displayManager` object has methods to display an input string and clear the current display. The `calcManager` is unique in that it is defined in a different style. It only has properties that hold the values for its two operands and the current operation, as well as a focus variable that indicates which operand is being updated currently. All its methods are defined externally as doing it otherwise would require me to use the `get` and `set` features, which are out of scope at the time I was doing this project.

These methods include functions that update the current focused operand and current operation. I outsourced the functionality to these methods instead of putting it in the event listeners for convenient separation. 


# Future Work (August 7, 2025)

Besides refactoring the `calcManager` implementation to be more compact and separating the auxiliary objects to a module, I intend to come back to this project to add more functionality that the calculator still lacks. This includes decimal numbers, negative numbers, and other common mathematical operations like square roots.
