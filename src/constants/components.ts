export const COMPONENTS: Array<{
  id: string;
  name: string;
  iconName: string;
  disabled?: boolean;
}> = [
  { id: "button", name: "Button", iconName: "MousePointer" },
  { id: "input", name: "Input Field", iconName: "Type", disabled: true },
  {
    id: "dropdown",
    name: "Dropdown Select",
    iconName: "ChevronsUpDown",
    disabled: true,
  },
  { id: "checkbox", name: "Checkbox", iconName: "CheckSquare", disabled: true },
  { id: "radio", name: "Radio Group", iconName: "List", disabled: true },
  {
    id: "toggle",
    name: "Toggle Switch",
    iconName: "ToggleLeft",
    disabled: true,
  },
  {
    id: "alert",
    name: "Alert Message",
    iconName: "AlertTriangle",
    disabled: true,
  },
  { id: "progress", name: "Progress Bar", iconName: "Sliders", disabled: true },
  {
    id: "spinner",
    name: "Loading Spinner",
    iconName: "Loader2",
    disabled: true,
  },
  {
    id: "datepicker",
    name: "Date Picker",
    iconName: "CalendarDays",
    disabled: true,
  },
];
