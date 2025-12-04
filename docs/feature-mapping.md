

# M&S E-commerce Feature Mapping
**Date:** November 16, 2025  
**Purpose:** Provide a comprehensive mapping of all testable features for the automation framework, enabling robust coverage and maintainability.  
**Platform:** Marks & Spencer E-commerce Website



## 1. Search Functionality
The search feature is the primary entry point for product discovery. It supports a variety of user flows, filter options, and error handling to ensure a seamless experience.


### Entry Point
- **URL:** https://www.marksandspencer.com/
- **Main Element:** Search input bar in the website header



### User Flows
1. **Basic Search**
   - User enters a product query (e.g., "Men's Suits")
   - Initiates search via button or Enter key
   - Redirected to a dynamically generated results page

2. **Search Results Display**
   - Results header displays the query
   - Filter options (Brand, Colour, Size, Style, Fit) are visible
   - Result count is shown
   - Product cards include: image, price, product name, description, rating, and review count

3. **Search Filters**
   - User expands "All Filters" to reveal advanced options (Gender, Material, Body Fit, Occasions, Price, Pattern)
   - Filters can be combined for granular results

4. **Search Sorting**
   - Results can be sorted by relevance (default), new arrivals, best selling, price (low-high, high-low), and ratings



### Key Interactable UI Elements
- **Search input bar:** `page.locator('#searchId:visible')`
- **Search button:** `page.locator('#SearchIconInputBtn:visible')`
- **Results header:** `page.locator('span').nth(0)`
- **Product card:** `page.locator("div[id='']")`
- **All Filters button:** `page.getByRole('button', { name: 'All Filters' })`
- **Individual filter buttons:** `page.getByRole('button', { name: '' })`
- **Sorting dropdown:** `page.getByRole('combobox', { name: 'Sort by' })`



### Expected Behaviors
- Search executes within 3 seconds for optimal user experience
- Results are returned for any valid query (minimum 0 results)
- Filters update results instantly and dynamically
- Sorting preserves current filter selections



### Error States
- **Empty search:** Validation message or no action
- **No results:** "No products found" message displayed
- **Network error:** Error message with retry option



## 2. Product Display and Details
Product pages provide detailed information and interactive options for each item, supporting both single and multi-item products.



### Entry Point
- **Sources:** Search results, category pages, homepage recommendations
- **URL Pattern:** Complex and distinctive; entry point hooks will be analyzed in future framework upgrades



### User Flows
1. **View Product Details**
   - Product gallery displays multiple images
   - Product title and pricing are shown (single or multi-item)
   - Color and size options are available for selection
   - Size Chart and Fit Guide provide additional sizing information
   - "Add to Bag" button enables purchase flow
   - Informational sections: "About this style", "Details and care", "Delivery, collections & returns"
   - Free standard delivery message with info icon
   - Payment and financing options are listed
   - Newsletter sign-up prompt if not already completed

2. **Product Variants**
   - User selects size and color
   - Product images update based on selected attributes

3. **Add to Bag**
   - Single-item products: quantity selector available
   - Multi-item products: user must select each item and add individually
   - Overlay confirmation: "Great taste! [product title] [color, size & length]" with options to continue shopping or proceed to checkout
   - Cart icon updates to reflect total items

4. **Key UI Elements**
   - Product gallery, title, price, color/size selectors, Add to Bag button, informational sections, cart icon

5. **Expected Behaviors**
   - Size selection required before adding to bag
   - Quantity per item: 1–20 (subject to stock)
   - Successful add triggers overlay confirmation
   - Out-of-stock items cannot be added

6. **Error States**
   - Missing size: "Please select the size" validation
   - Out of stock: "Notify Me" option
   - Quantity exceeds maximum: Apologies message (e.g., suits allow up to 20, but cart may reduce to 16 on review)



## 3. Shopping Cart Features
The shopping cart aggregates selected products, supports quantity management, wishlist integration, and checkout initiation.


### Entry Point
- **Access:** Click cart icon in header
- **URL:** https://www.marksandspencer.com/basket/view#intid=header_minibasket_view-bag-button



### User Flows
1. **View Cart**
   - All added items are displayed with images, collection, title, color, size, and length
   - Basket and wishlist item counts are shown
   - Summary tab displays total price (excluding delivery)

2. **Update Quantities**
   - Quantity can be changed via dropdown
   - Price and item count update instantly

3. **Remove or Move Items to Wishlist**
   - Remove/delete button removes item from cart
   - Wishlist heart icon moves item to wishlist (only unique product card added, regardless of quantity)
   - If last item is removed, user is redirected to wishlist; otherwise, remains on cart page

4. **Proceed to Checkout**
   - "Checkout Securely" button initiates checkout
   - Signed-in users go to payment; others are prompted to sign in or use guest checkout
   - Guest checkout requests email, then proceeds to payment



### Key UI Elements
- Cart icon, item list, quantity dropdown, remove button, wishlist button, summary tab, checkout button


### Expected Behaviors
- Cart contents persist across browser sessions
- Quantity changes recalculate prices instantly
- Removing last item triggers empty cart state
- Checkout requires at least one item in the cart


### Error States
- **Quantity exceeds stock:** Error message and notification
- **Item out of stock:** Notification displayed
- **Empty cart:** Checkout is disabled



## 4. Checkout Flow
The checkout process guides users through payment and order completion, handling both signed-in and guest flows.

### Entry Point
- **Source:** Shopping bag/cart
- **URL:** Complex, parameterized (varies by session and cart contents)

### User Flows
- User clicks "Checkout Securely" from cart
- If signed in, redirected to payment and address entry
- If not signed in, prompted to sign in or continue as guest
- Guest checkout requests email, then proceeds to payment
- Order summary, address, delivery options, and payment methods are presented
- Confirmation page shown after successful payment

### Key UI Elements
- Checkout button, sign-in prompt, guest email input, address form, delivery options, payment method selector, order summary, confirmation message

### Expected Behaviors
- Checkout flow is secure and user-friendly
- All required fields must be completed before payment
- Order confirmation is displayed after successful transaction

### Error States
- Missing required fields: validation errors
- Payment failure: error message and retry option
- Out-of-stock items: notification and removal from order