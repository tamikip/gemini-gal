
export interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  tags: string[];
  rating: number;
  releaseDate: string;
  features: string[];
  brand: 'KEY' | 'YUZU' | 'ANIPLEX' | 'OTHER';
}

export interface CartItem extends Game {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type ViewState = 'HOME' | 'PRODUCT_DETAILS' | 'CHECKOUT';

export type Language = 'en' | 'zh';
