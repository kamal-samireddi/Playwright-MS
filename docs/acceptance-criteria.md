# Acceptance Criteria - M&S E-commerce Platform
# Date: 31st December, 2025
# Format: GIVEN-WHEN-THEN
# Purpose: Define testable acceptance criteria for all features

## Feature 1: Search Functionality

### AC 1.1: Basic Search - Valid query

**GIVEN** user is on the M&S hompage
**WHEN** user enters a valid search query (e.g., "mens shirts") in the search input
**AND** clicks the search button or presses enter
**THEN** the system redirects to the search results page 
**AND** displays relevant products matching the query
**AND** shows the total number of results
**AND** loads rersults within 3 seconds

### AC 1.2: Search Results Display

**GIVEN** user has excused a valid search query
**WHEN** the search results page loads
**THEN** each product result displays product image, price, title
**AND** results are displayed in a grid layout
**AND** at least 48 results are visible

### AC 1.3: Search - No Results

**GIVEN** user is on the M&S homepage
**WHEN** user enters a search query with no matching products


