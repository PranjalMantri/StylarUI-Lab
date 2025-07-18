export const COMPONENTS: Array<{
  id: string;
  name: string;
  iconName: string;
  disabled?: boolean;
}> = [
  { id: "button", name: "Button", iconName: "MousePointer" },
  { id: "input", name: "Input Field", iconName: "Type" },
  {
    id: "dropdown",
    name: "Dropdown Select",
    iconName: "ChevronsUpDown",
  },
  { id: "checkbox", name: "Checkbox", iconName: "CheckSquare" },
  { id: "slider", name: "Slider", iconName: "Sliders" },
  {
    id: "spinner",
    name: "Loading Spinner",
    iconName: "Loader2",
  },
];
