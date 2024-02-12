import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from '../redux/actions';
import { ProductProps } from "../interfaces";

interface Props {
  product: ProductProps;
}

export function CardProduct({ product }: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.price, imageURL: product.imageURL, quantity: 1 }));
  };
  
  return (
    <div
      className='cardProduct p-4 d-flex align-items-center  rounded'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={product.imageURL} className='imageBurger' alt={product.name} />
      <div>
        <strong className='textOrange display-6'>{product.name}</strong>
        {isHovered ? (
          <div>
            <button 
              onClick={handleAddToCart}
              className='btn btn-danger mt-2'>
              Buy
            </button>
          </div>
        ) : (
          <p className='text-danger mt-2 font-weight-bold display-6'>${product.price}</p>
        )}
      </div>
    </div>
  );
}
