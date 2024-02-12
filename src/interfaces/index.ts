export interface CartProps{
  id: string;
  name: string;
  imageURL: string;
  price: number;
  quantity: number;
}

export interface ProductProps{
  id: string;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

export interface CardCartProps{
  id: string;
  name: string;
  price: number;
  quantity: number;
}
