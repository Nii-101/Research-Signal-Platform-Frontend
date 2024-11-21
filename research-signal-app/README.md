# Research Signal App

## Overview

The `research-signal-app` is a React-based application that displays and manages signals for a research team. It includes features like filtering signals by new status, viewing detailed signal information, and interacting with signals through actions like "Take", "Watch", and "Pass".

## Components

### ui
- **accordion.tsx**: Provides an accordion UI component.
- **button.tsx**: Provides a button UI component.
- **card.tsx**: Provides a card UI component.
- **toggle.tsx**: Provides a toggle UI component.
- **tooltip.tsx**: Provides a tooltip UI component.

### SignalCard.jsx
Displays a single signal with its details and actions.

### SignalChart.jsx
Displays a chart visualization for a signal.

### SignalList.jsx
Manages the overall list of signals, including filtering and toggling signal details.

### loader.jsx
Displays a loading indicator.

### App.css
Contains global styles for the application.

### utils.js
Provides utility functions used across the application for the shadcn ui import.

## Key Features

- Displaying a list of signals with relevant metrics:
  - **VRP Z-Score**
  - **VRP Ratio**
  - **Expected Return**
  - **Confidence**
  
- Filtering the signal list to show only new signals.
- Expanding a signal card to view its detailed analysis:
  - **Historical Win Rate**
  - **Average Hold Time**
  - **Risk Score**
  
- Interacting with signals through actions like:
  - **Take**
  - **Watch**
  - **Pass**
  
- Displaying signal status indicators like:
  - **In Lab**
  - **New**
  
- Providing a chart visualization for signal data.
- Handling loading state and error cases.

## Getting Started

### Installation

1. Clone the repository.
2. Install dependencies:
    npm install
3. Run on local server:
    npm run dev



### Limitations
1. The chart is not as informative as can be.
2. The application is not typesafe
3. UI isn't appealing

### Future Improvements
1. Making the application typesafe by using typescript
2. Improve the analysis chart by exploring different chart libraries
3. Working on UI