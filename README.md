# Theme Toggle Feature

## Description

This script enables users to easily toggle between light and dark modes on your website. It leverages Local Storage to save the user's theme preference, ensuring that the chosen setting persists across sessions and remains consistent across tabs.

## Features

- **Theme Toggling**: Allows users to switch between a light and a dark theme.
- **Persistence**: User preferences are saved in Local Storage, maintaining their theme choice between visits.
- **Synchronization**: Theme changes are instantly applied across all tabs that share the same domain.

# Code Explanation

## Functions

### `toggleTheme` Function

This function toggles the theme between 'dark-mode' and 'light-mode'. It performs the following actions:

- Updates the Local Storage with the new theme setting.
- Changes the text of the toggle button to reflect the current mode (either "Enable Dark Mode" or "Enable Light Mode").

### `applySavedTheme` Function

This function applies the theme that is saved in Local Storage to the webpage. It is called:

- On page load to ensure the previously selected theme is applied.
- When changes are detected in Local Storage, enabling synchronization of the theme across different browser tabs that visit the same domain.

## Event Listeners

### `toggleButton.addEventListener('click', toggleTheme)`

Listens for click events on the toggle button. This triggers the `toggleTheme` function, allowing users to switch between light and dark themes.

### `window.addEventListener('storage', (e) => { if (e.key === 'theme') { applySavedTheme(); } })`

Listens for storage events to detect when the theme setting changes in Local Storage. This ensures that any theme changes are immediately applied to all open tabs, maintaining consistent appearance across the site.
