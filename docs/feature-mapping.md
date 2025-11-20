**M&S E-commerce Feature Mapping
Date: November 16, 2025
Purpose: Document all testable features for automation framework
Platform: Marks & Spencer E-commerce Website**

## 1. Search Functionality

### Entry Point
-URL: https://www.marksandspencer.com/
Main Element: Search input bar in header

### User Flows
1. **Basic Search**
- User enters product query (example: Men's Suits)
- Clicks search button or presses enter
- User is redirect to search results page

2. **Search Results Display**
- Header says "Search results for Men's Suits"
- Few filter options displayed (Brand, Colour, Size, Style, Fit)
- Displays result count
- Product cards show (Image, Price, Product name, Short description, Rating, No. of reviews)

3. **Search Filters**
- User clicks on all filters 
- Additional filters are revealed (Gender, Material, Body Fit, Occasions, Price, Pattern)

4. **Search Sorting**
- Sort by relevance (Default), new arrivals, best selling, price low-high, price high-low, ratings

### Key Interactable UI Elements
- Search input bar: page.locator('#searchId:visible')
- Search Button: page.locator('#SearchIconInputBtn:visible')
- Results Header: page.locator('span').nth(0)
- Product Card: page.locator("div[id='']")
- All Filters Button: page.getByRole('button', { name: 'All Filters' })
- Individul filter buttons: page.getByRole('button', { name: '' })
- Sorting Dropdown: page.getByRole('combobox', { name: 'Sort by' })

### Expected Behaviors
- Search executes within 3 seconds
- Minimum 0 results for any query
- Filters update results dynamically
- Sorting maintains filter state

### Error States
- Empty search: Shows validation message or no action
- No results: "No products found" message
- Network error: Error message with retry option

## 2. Product Display and Details

### Entry Point
- From: Search Results, Category Pages, Homepage Reccomendations
- URL Pattern: Distinctive and Complex (Out of scope for now, difficult to use it as an entry point hooks to make the workflow eaiser - will be analysed as part of upgrades to the frameworks).

### User Flows
1. **View Product Details**
- Display product images (Gallery)
- Product title 
- For single item product cards (price), For multi-item product cards (Total Price and also individual item price)
- colors options displayed
- Select size for each item or just the item
- Size Chart and Fit guide options
- Add to bag button displayed
-"About this style", "details and care" ,"delivery, collections & returns" section displayed for single item product cards and for multi item respective details are displayed for each individual item.
- Free standard delivery message displayed with a functional info icon 
- Displays ways to pay and spread the cost methods at the end
- Newsletter sign up option if not done already
2. **Product Variants**
- Select sizes
- Select Color
- corresponding product images are shown (this is essentially by only colcor and size and length of the product doesnt matter)
3. **Add to Bag**
- For single item products quantity opetion is given and not for the multi-item products, customer has to click on the add to cart button twiceto add two of the same products
- for multi-item products, before clicking the add to bag button, u need to click choose the item button for individual items.
- clicking on the add to bag button must return an overlay message card with "Great taste!, [product title][color, size & length]", tick successfully added to your bag, with two forward flow options "continue shopping" and "Checkout".
- Cart icon updates with the total number of products in the cart
4. **Key UI Elements**
- 

5. **Expected Behaviours**
- Sizes must be selected before add to bag
- quantity can be 1-20, maximum of 20 per item but can <20 according to stock availability
- Add to bag shows successfully added overlay
- Out of stock items cannot be added

6. **Error States**
-"Please select the size"validation message when performed add to bag option without selecting size
- Out of stock: notify me option
- Quantity exceeds max: apologies message displayed (this is particulary true for suits), also there is an edge case where the system allows the user to add 20 units and then shows the apologies message on attempt to add the 21st item of same item. -> the cart icon updates to 20, but on click, when navigated to the cart page the quantity is decreased to 16 units.

## 3. Shopping cart features
### Entry Point
- Click cart icon in header
- URL: https://www.marksandspencer.com/basket/view#intid=header_minibasket_view-bag-button

### User Flows
1. **View Cart**
- Display all added items
- Show (Item image, collection name, product title, color, size, length)
- Display total items in the basket
- Display total items in the wishlist
- Display summary tab with total price (excluding delivery)

2. **Update Quantities**
- Change quantity using dropdown
- Total price and total number of items in the basket updated

3. **Remove or move items to wishlist**
- click remove/delete button
- item disappears from the cart
- click wishlist heart icon button
- item dissapears from cart and total items in wishlist updates to 1, irrespective of the quantity in the cart, only unique item product card is added
- if this was the last item in the cart the user is automatically navigated to the wishlist page, otherwise the user stays on the updated cart page

4. **Proceed to Checkout**
- click on checkout securely button
- if signed in, redirects user to procced to payment page, if not, user is provided with an option to either sign in or use guest checkout
- clicking on guest checkout, asks for users email, and then navigates to the proceed to payment page

### Key UI Elements


### Expected Behaviours
- cart persists across browser sessions
- quantity updates recalculates prices instantly
- removing last item shows empty state
- checkout requires atleast 1 item

### Error States
- Quantity exceeds stock: error message and notification
- Item out of stock: notification shown
- Empty cart: cannot proceed to checkout

## 4. Checkout Flow

### Entry Point
-From: Shopping bag
-URL: complex (parameterised)

### User Flows