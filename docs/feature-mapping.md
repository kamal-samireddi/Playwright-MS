

# M&S E-commerce Feature Mapping
**Date:** November 16, 2025  
**Purpose:** Provide a comprehensive mapping of all testable features for the automation framework, enabling robust coverage and maintainability.  
**Platform:** Marks & Spencer E-commerce Website




## 1. Search Functionality
The search feature is the primary entry point for product discovery, enabling users to quickly locate items of interest. It supports intuitive user flows, robust filtering, and responsive error handling to ensure a seamless experience for all shoppers.



### Entry Points
- **Homepage URL:** https://www.marksandspencer.com/
- **Main Element:** Prominently placed search input bar in the website header, accessible via keyboard and screen readers




### User Flows
1. **Basic Search**
   - User enters a product query (e.g., "Men's Suits")
   - Initiates search via button or Enter key
   - Redirected to a dynamically generated results page with relevant products

2. **Search Results Display**
   - Results header displays the search query
   - Filter options (Brand, Colour, Size, Style, Fit) are visible and accessible
   - Result count is shown
   - Product cards include: image, price, product name, description, rating, and review count

3. **Search Filters**
   - User expands "All Filters" to reveal advanced options (Gender, Material, Body Fit, Occasions, Price, Pattern)
   - Filters can be combined for granular, personalized results

4. **Search Sorting**
   - Results can be sorted by relevance (default), new arrivals, best selling, price (low-high, high-low), and ratings
   - Sorting options are accessible and update results instantly




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
- All search and filter controls are accessible via keyboard and screen readers




### Error States
- **Empty search:** Validation message or no action
- **No results:** "No products found" message displayed
- **Network error:** Error message with retry option
- **Invalid input:** User is prompted to enter a valid query




## 2. Product Display and Details
Product pages provide comprehensive information and interactive options for each item, supporting both single and multi-item products. The design ensures clarity, accessibility, and a smooth shopping experience.




### Entry Points
- **Sources:** Search results, category pages, homepage recommendations
- **URL Pattern:** Complex and distinctive; entry point hooks will be analyzed in future framework upgrades




### User Flows
1. **View Product Details**
   - Product gallery displays multiple high-resolution images
   - Product title, pricing, and availability are clearly shown
   - Color and size options are available for selection, with visual feedback
   - Size Chart and Fit Guide provide additional sizing information
   - "Add to Bag" button enables purchase flow
   - Informational sections: "About this style", "Details and care", "Delivery, collections & returns"
   - Free standard delivery message with info icon
   - Payment and financing options are listed
   - Newsletter sign-up prompt if not already completed

2. **Product Variants**
   - User selects size and color
   - Product images update based on selected attributes
   - Variant selection is accessible and provides instant feedback

3. **Add to Bag**
   - Single-item products: quantity selector available
   - Multi-item products: user must select each item and add individually
   - Overlay confirmation: "Great taste! [product title] [color, size & length]" with options to continue shopping or proceed to checkout
   - Cart icon updates to reflect total items

### Key UI Elements
- Product gallery, title, price, color/size selectors, Add to Bag button, informational sections, cart icon

### Expected Behaviors
- Size selection required before adding to bag
- Quantity per item: 1–20 (subject to stock)
- Successful add triggers overlay confirmation
- Out-of-stock items cannot be added
- All controls are accessible and provide clear feedback

### Error States
- **Missing size:** "Please select the size" validation
- **Out of stock:** "Notify Me" option
- **Quantity exceeds maximum:** Apologies message (e.g., suits allow up to 20, but cart may reduce to 16 on review)




## 3. Shopping Cart Features
The shopping cart aggregates selected products, supports quantity management, wishlist integration, and checkout initiation. It is designed for clarity, responsiveness, and accessibility, ensuring users can manage their selections with ease.



### Entry Points
- **Access:** Click cart icon in header
- **URL:** https://www.marksandspencer.com/basket/view#intid=header_minibasket_view-bag-button




### User Flows
1. **View Cart**
   - All added items are displayed with images, collection, title, color, size, and length
   - Basket and wishlist item counts are shown
   - Summary tab displays total price (excluding delivery)
   - Cart is accessible via keyboard and screen readers

2. **Update Quantities**
   - Quantity can be changed via dropdown
   - Price and item count update instantly
   - Quantity controls are accessible and provide feedback on limits

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
- All cart controls are accessible and provide clear feedback



### Error States
- **Quantity exceeds stock:** Error message and notification
- **Item out of stock:** Notification displayed
- **Empty cart:** Checkout is disabled




## 4. Checkout Flow
The checkout process guides users through payment and order completion, handling both signed-in and guest flows. It is designed for security, clarity, and accessibility, ensuring a smooth transaction experience.


### Entry Points
- **Source:** Shopping bag/cart
- **URL:** Complex, parameterized (varies by session and cart contents)


### User Flows
1. **Initiate Checkout**
   - User clicks "Checkout Securely" from cart
   - If signed in, redirected to payment and address entry
   - If not signed in, prompted to sign in or continue as guest

2. **Guest Checkout**
   - Guest checkout requests email, then proceeds to payment
   - Guest users can enter address and delivery details

3. **Order Completion**
   - Order summary, address, delivery options, and payment methods are presented
   - Confirmation page shown after successful payment
   - All forms and controls are accessible and provide validation feedback


### Key UI Elements
- Checkout button, sign-in prompt, guest email input, address form, delivery options, payment method selector, order summary, confirmation message


### Expected Behaviors
- Checkout flow is secure and user-friendly
- All required fields must be completed before payment
- Order confirmation is displayed after successful transaction
- All forms and controls are accessible and provide clear validation feedback


### Error States
- **Missing required fields:** Validation errors
- **Payment failure:** Error message and retry option
- **Out-of-stock items:** Notification and removal from order


## 5. Navigating and Browsing

### Overview
This section covers how users navigate and browse the M&S e-commerce site, including menu interactions, category exploration, breadcrumb navigation, and access to key informational links. The navigation experience is designed for clarity, accessibility, and efficiency.

### User Flows
1. **Main Menu Navigation**
   - Hover over main menu categories to reveal subcategories
   - Click a subcategory to view its landing page
   - Explore category landing pages with featured products and filters
   - Browse products within a category using pagination or infinite scroll
   - All menu interactions are accessible via keyboard and screen readers

2. **Breadcrumb Navigation**
   - Breadcrumbs display the user's current location within the site hierarchy (e.g., Home / Men / Men's Knitwear / Men's Jumpers)
   - Users can click any breadcrumb to navigate back to a previous section
   - Breadcrumbs update dynamically as users move between categories and product pages

3. **Footer and Informational Links**
   - Footer provides quick access to support, store information, accessibility, product recalls, and site map
   - Delivery & Returns section includes order tracking, delivery options, guest order management, and refund policies
   - Shopping with Us section offers links to Sparks loyalty program, FAQs, gift card balance, size guides, and sustainability initiatives
   - More from M&S includes links to Ocado, corporate site, gifts, financial services, opticians, and careers

### Accessibility Considerations
- Menus and navigation elements are keyboard-accessible
- ARIA labels and roles are used for screen readers
- High-contrast and large-text options available in footer

### Expected Behaviors
- Main menu opens on hover and is responsive to touch/click
- Breadcrumbs accurately reflect navigation path and update in real time
- Category and landing pages load in under 200ms for optimal user experience
- Footer links are always accessible and open in appropriate context (same tab or new tab as needed)
