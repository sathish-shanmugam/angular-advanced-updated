/* Defines the product entity */
export interface Product {
    id: number;
    weight: number;
    height: number;
    order: number;
    name: string;
    moves?: [];
    stats?:[];
    sprites?:{};    
  }