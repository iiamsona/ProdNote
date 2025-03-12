export interface ButtonConfig {
  id: string;
  label: string;
  action?: string;
}

export const buttonNames: ButtonConfig[] = [
  { id: 'numberOfPages', label: 'Number of Pages' },
  { id: 'lineColor', label: 'Line Color' },
  { id: 'lineThickness', label: 'Line Thickness' },
  { id: 'lineStyle', label: 'Line Style' },
  { id: 'pageColor', label: 'Page Color' },
  { id: 'pageNumbering', label: 'Page Numbering' },
  { id: 'pageMaterial', label: 'Page Material' },
  { id: 'pageBackground', label: 'Page Background' },
];
