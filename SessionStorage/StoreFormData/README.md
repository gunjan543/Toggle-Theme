# Session Storage Form Data Example

## Overview

This project demonstrates how to use session storage to persist form data within a user's browser session. It ensures that the data entered in a form remains available during page refreshes but disappears when the browser tab or window is closed.

## Functionality

- **Persisting Form Data**: As the user inputs data into the form, this data is captured and stored in session storage. This ensures that the data remains accessible during the browser session, even if the page is refreshed.
- **Populating Form on Page Load**: When the page is loaded or reloaded, the form fields are automatically filled with any previously entered data that's stored in the session.

## Code Description

- **Event Listener on Form**: The code attaches an `input` event listener to the form. Every time a form field is changed, the data is captured and stored in session storage. The storage key is the name of the form field, making it easy to retrieve and populate each specific field correctly.
- **Populate Form Function**: At the start of the session or on a page reload, the form is populated with the data retrieved from session storage, if available. This ensures a smooth user experience by keeping user-entered data visible and available without having to re-enter it.

This implementation is particularly useful in situations where it's important to maintain the integrity and continuity of user-input data without needing to save it permanently, providing a clean and user-friendly interface for forms that may not be completed in one go.
