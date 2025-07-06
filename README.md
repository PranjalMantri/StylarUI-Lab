# StylarUi Lab

StylarUi Lab is a modern React + TypeScript application built with Vite, designed for rapid prototyping and configuration of UI components. The project features a playground where users can interactively customize and preview UI elements such as Buttons, Checkboxes, Dropdowns, Inputs, Sliders, and Spinners, and export their code for use in other projects.

## Features

- **Component Playground:** Visually configure and preview UI components in real time.
- **Code Export:** Instantly generate and copy the code for your configured components.
- **Supported Components:** Button, Checkbox, Dropdown, Input, Slider, Spinner.

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
src/
  components/
    Button/
    Checkbox/
    Dropdown/
    Input/
    Slider/
    Spinner/
    landing/
    playground/
    ui/
  constants/
  lib/
  pages/
  store/
```

- **components/**: Contains all UI components and their configurators/previews. Each component has its own dedicated folder.
- **constants/**: Shared constants (e.g., component definitions, icon maps).
- **lib/**: Utility functions.
- **pages/**: Main application pages (e.g., Playground, LandingPage).
- **store/**: State management using custom hooks and stores.

## Customization & Extensibility

- Add new components by creating a folder under `src/components/` and updating the constants and store as needed.
- Extend the playground by adding new configurators and preview components.

## License

MIT
