import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../redux/actions"

import { CartProps } from "../interfaces"

interface Props{
  product: CartProps;
}

export function CardCart({ product }: Props){
  const dispatch = useDispatch()
  
  const handleIncrement = () => {
    dispatch(increment(product.id)); 
  }

  const handleDecrement = () => {
    dispatch(decrement(product.id))
  }
  return(
    <div className="bg-white d-flex align-items-center p-4 rounded mb-4">
      <div className="d-flex align-items-center me-4">
        <img src={product.imageURL} className="imgCardCart me-4"/>
        <div className="me-4">
          <p>{product.name}</p>
          <span>
            R${product.price}
          </span>
        </div>
        <div className="d-flex gap-2">
          <button onClick={handleIncrement}>
            +
          </button>           
          {product.quantity}
          <button onClick={handleDecrement}>
            -
          </button>
        </div>
      </div>
    </div>
  )
}
