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
  { id: "slider", name: "Slider", iconName: "Sliders" },
  {
    id: "spinner",
    name: "Loading Spinner",
    iconName: "Loader2",
  },
  {
    id: "datepicker",
    name: "Date Picker",
    iconName: "CalendarDays",
    disabled: true,
  },
];
