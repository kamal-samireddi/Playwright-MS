# Acceptance Criteria — M&S E-commerce Platform
**Date:** 31 December 2025
**Format:** GIVEN — WHEN — THEN
**Purpose:** Define clear, testable acceptance criteria for platform features.

## Feature 1: Search Functionality

### AC 1.1: Basic search — valid query

**GIVEN** the user is on the M&S homepage
**WHEN** the user enters a valid search query (e.g., "men's shirts") into the search input
**AND** clicks the search button or presses Enter
**THEN** the system redirects to the search results page
**AND** displays products relevant to the query
**AND** shows the total number of results
**AND** returns results within 3 seconds

### AC 1.2: Search results display

**GIVEN** the user has executed a valid search query
**WHEN** the search results page loads
**THEN** each product result displays an image, price, and title
**AND** results are presented in a grid layout
**AND** at least 48 results are visible on the page when 48 or more matching items exist

### AC 1.3: Search — no results

**GIVEN** the user is on the M&S homepage
**WHEN** the user submits a search query with no matching products
**THEN** the system displays a clear message such as:
"Oops! We can't find a match for 'yakuza'"
**AND** the page shows a helpful prompt, for example:
"Don't give up — check the spelling, try the product code, or search for something more generic."

### AC 1.4: Search - Empty Input

**GIVEN** user is on the M&S hompage
**WHEN** user clicks the search button without entering any text
**THEN** the system shows a tooltip message "Please fill in this field".
**AND** does not redirect to search results page bar

### AC 1.5: Search Filters - Price Range

**GIVEN** use has executed a search and is on the results page
**WHEN** user applies a price filter (ex: £20 to £150)
**THEN** only products within that price range are displayed
**AND** the result count updates to reflect filtered results
**AND** filter state is maintained when scrolling or sorting

### AC 1.6: Searcg Sorting

**GIVEN** user has search results displayed
**WHEN** user selects a sort option
**THEN** products are reordered according to the selected criteria
**AND** applied filters remain active
**AND** the sort selection is visibily indicated

## Feature 2: Product Display & Details

### AC 2.1: View Product Details

**GIVEN** user clicks on a product from search results or category page
**WHEN** the product details page loads
**THEN** the following information is displayed:
- product title
- product price
- product images
- product description
- Available sizes/colors
- Stock status
- Add to bag button

**AND** page loads within 3 seconds

### AC 2.2: Select Product Variant (Size)

**GIVEN** user is on a product details page
**WHEN** user clicks on a size option
**THEN** the selected size is visually highlighted
**AND** the price updates if variant-specific pricing exists
**AND** the stock status updates for that size

### AC 2.3: Add Product to Bag - Success

**GIVEN** user is on a product details page
**AND** has selected a size
**WHEN** user clicks the "Add to bag" button
**THEN** a success confirmation message appears
**AND** the cart icon in header updates to show item count
**AND** user can continue shopping or view bag

### AC 2.4  Add to Bag - No Size Selected

**GIVEN** user is on a product details page for a sized product
**AND** has not selected a size
**WHEN** user clicks "Add to bag"
**THEN** an error message displays
**AND** the size selector is highlighted
**AND** the product is not added to the bag

### AC 2.5 Product out of stock

**GIVEN** user views a product that is out of stock
**WHEN** the product page loads
**THEN** the "Add to bag" button is disabled
**AND** a message displays: "Out of stock"
**AND** a "Notify me when available" option may be shown

### AC 2.6: Quantity Selection

**GIVEN** user is on a product details page
**WHEN** user changes the quantity field
**THEN** the quantity selector accepts values 1-99
**AND** adding to bag adds the specified quantify
**AND** invalid quantities(0, negative, >max) showqqqqqs error toast message