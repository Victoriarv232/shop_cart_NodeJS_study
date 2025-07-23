# Shop Cart
A backend project made with JavaScript and NodeJS. Following the course "mobile developer" by DIO.me

## Goals:
* Create a shop cart based on the shopee's mechanism, where the cart keep items and calculate the subtotal automatically.

### Aplication's dominium: 
* shop cart

### Entities:
* cart = services/cart.js
* items = services/items.js

## Extra
--
   In the course, the teacher didn't notice that the subtotal, after removing an item wasn't decreasing as it should be, so the total was also wrong at the end, so i managed to fix this bug tranforming the subtotal function on an async function.
   This way, the function can wait for the end of the 'removeItem' function and then calculate the subtotal correctly. 
   Now, the code shows the subtotal and total automatically, without errors, even if you delete or remove an unity of an item!