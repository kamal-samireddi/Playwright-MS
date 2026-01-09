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


