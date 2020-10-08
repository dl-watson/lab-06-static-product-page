# lab-06-static-product-page

current goals:

- selecting quantity 0 in the cart quantity dropdown removes the item from your cart

- more consistent styling: 

    > header with navigation links

    > cart navigation with logo (animation?) in the nav bar 

- refactor and reorganize code (current state of renderView functions make me want to scream)

---

Step 2: TDD API Method for Add Product

Add a new, tested function addProduct as a util function. It takes a product object as a parameter and puts the product 

into the correct place in localStorage. Your test should add a product, then retrieve all the products and assert deep 

Equal the last item in the array and the supplied new product.

Your function will need to:

Retrieve the existing products array
Push the new product into the array
Re-save the products array into localStorage
Your test will:

Add the product using your function
Examine the PRODUCT notch in localStorage. Use deepEqual to check that the product is now in localStorage.


--- 

STRETCH Step 4: Remove a Product
On the product entry page, also render a list of products with a remove button by each one.
Add a function removeProduct that takes a product code. In that method, find the product and remove from the product array.
Use this funtion to remove an item on an appropriate click;
BONUS: When adding a product, also renderer a new list items add it to the list of products.

