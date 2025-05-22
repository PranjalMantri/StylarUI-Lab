export const COMPONENTS: Array<{
  id: string;
  name: string;
  iconName: string;
  disabled?: boolean;
}> = [
  { id: "button", name: "Button", iconName: "MousePointer" },
  { id: "input", name: "Input Field", iconName: "Type", disabled: true },
  { id: "card", name: "Card View", iconName: "LayoutGrid", disabled: true },
  { id: "modal", name: "Modal Dialog", iconName: "Maximize2", disabled: true },
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
  { id: "badge", name: "Badge", iconName: "Gift", disabled: true },
  { id: "progress", name: "Progress Bar", iconName: "Sliders", disabled: true },
  {
    id: "spinner",
    name: "Loading Spinner",
    iconName: "Loader2",
    disabled: true,
  },
  { id: "avatar", name: "Avatar", iconName: "User", disabled: true },
  { id: "tooltip", name: "Tooltip", iconName: "MessageSquare", disabled: true },
  { id: "tabs", name: "Tabs Navigation", iconName: "Folder", disabled: true },
  { id: "accordion", name: "Accordion", iconName: "AlignLeft", disabled: true },
  {
    id: "datepicker",
    name: "Date Picker",
    iconName: "CalendarDays",
    disabled: true,
  },
  { id: "image", name: "Image Display", iconName: "ImageIcon", disabled: true },
  { id: "link", name: "Hyperlink", iconName: "Link2", disabled: true },
  { id: "table", name: "Data Table", iconName: "Table", disabled: true },
];
