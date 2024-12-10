# Accordion in React

A simple and dynamic Accordion component built with React to display FAQ items. It supports toggling of individual FAQ answers with a clean, reusable structure.

## Features

- Displays FAQ questions and answers dynamically.
- Allows toggling visibility of individual answers.
- Responsive and reusable component design.
- State management using React hooks (`useState` and `useEffect`).


## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Usage
- Add or modify FAQ data in the faq.json file in the api/ folder.
- The Accordion dynamically renders FAQ items based on the faq.json content.
- Toggle answers by clicking the "Show" or "Close" buttons.

## Code Overview

### Accordion Component
The Accordion component manages:

- FAQ data state (data).
- The active state for toggled FAQ items (activeId).

### AQCard Component
The FAQCard component:

- Receives FAQ data and active state as props.
- Dynamically toggles the answer's visibility based on the active state.

## Customization
- Update styles in the CSS file to fit your project's design.
- Modify faq.json to include your content.

## Technologies Used
- React
- JavaScript (ES6+)
- JSON for mock data

## License
This project is open-source. Feel free to modify and use it in your projects.