# Lotto Number Recommender Blueprint

## Overview
A modern, visually appealing web application that generates random lotto numbers (1-45) for the Korean lottery system. The app features a clean UI with animated lotto balls and a vibrant design.

## Features
- **Random Number Generation**: Generates 6 unique numbers between 1 and 45.
- **Visual Lotto Balls**: Displays numbers inside colored circles matching the standard lotto color scheme (Yellow, Blue, Red, Grey, Green).
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Animations**: Smooth transitions when generating new numbers.

## Design Specifications
- **Colors**:
  - 1-10: Yellow (#fbc400)
  - 11-20: Blue (#69c8f2)
  - 21-30: Red (#ff7272)
  - 31-40: Grey (#aaa)
  - 41-45: Green (#b0d840)
- **Typography**: Clean sans-serif fonts.
- **Effects**: Soft shadows, gradients, and a subtle background texture.

## Implementation Plan
1. **HTML**: Structure the app with a title, a display area for the balls, and a "Generate" button.
2. **CSS**: 
   - Use Flexbox/Grid for layout.
   - Implement lotto ball styling with colors and shadows.
   - Add responsive styles.
3. **JavaScript**:
   - Logic to generate 6 unique random numbers.
   - Logic to sort numbers in ascending order.
   - DOM manipulation to display the balls with appropriate colors.
   - Animation trigger on button click.
