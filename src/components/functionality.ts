export interface ButtonConfig {
  id: string;
  label: string;
  action?: string;
  func?: string;
}

export const buttonNames: ButtonConfig[] = [
  { id: 'numberOfPages', label: 'Number of Pages', func:'number' },
  { id: 'lineColor', label: 'Line Color', func:'color'  },
  { id: 'lineThickness', label: 'Line Thickness', func:'number'  },
  { id: 'lineStyle', label: 'Line Style', func:'select'  },
  { id: 'pageColor', label: 'Page Color', func:'color'  },
  { id: 'pageNumbering', label: 'Page Numbering', func:'number' },
  { id: 'pageMaterial', label: 'Page Material', func:'select'  },
  { id: 'pageBackground', label: 'Page Background', func:'select' },
  
];
