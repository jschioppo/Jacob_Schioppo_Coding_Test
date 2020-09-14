All problem code is in the src folder, all Jest unit tests are in the test folder

Explanation and Assumptions:

The basic premise is for each line item a new "Receipt Item" that contains info like price, quantity, and the name is created and checked against a dictionary, the name being the key.
If the item doesn't exist already, the item is added to the receipt dictionary, otherwise the quantity for the corresponding object is created
At the end the size of the dictionary will reflect the number of unique items in the input. So if book appears 3 times, the dictionary will contain one object

The project makes a few assumptions and concessions:

* The first item in a line item is the quantity
* The last item in a line item is the price
* The second to last item in a line item is the word 'at'
* Everything else in a line item is the name of the product, including imported
* If an item is imported, it must physically say imported anywhere in the name
* Tax exempt items must contain any of the words pill(s), chocolate(s), or book(s). Anything outside of those will not be tax exempt
* An input line must be at least 4 lines long to be valid, and the name must be more than just "imported" (i.e. 1 imported at 10 is invalid)
* For two items to be on the same line, they must be exactly equal strings. So Book and book would be considered different items, but both tax exempt
* An item will not be on the same line as an imported equivalent, i.e. a book is different from an imported book
* Blank or completely invalid input that would lead to a total of 0 will have blank output

Commands:

"npm run build" - Builds the project
"npm run start" - Runs the index.js file for solving the problem
"npm run test" - Runs unit tests

Input and output: 

input.txt in src/text_files folder is read for problem input
output.txt in src/text_files contains problem output