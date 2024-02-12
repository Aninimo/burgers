export function HotDeals(){
  return(
    <div className="mt-4">
      <h3 className="text-center">
        Hot <span className="text-danger">Deals</span>
      </h3>
      <div className="hotDeals d-flex align-items-center">
        <img src="https://pngimg.com/uploads/kfc_food/small/kfc_food_PNG68.png"
          alt="Hamburger"
          className="w-50"
        />
        <div >
          <h2 className="text-danger">
            SPECIAL COMBO PACK
          </h2>
          <h4 className="textOrange">
            Burger Bizz <br/>
            Fries & Drinks
          </h4>
          <p className="textWidth mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum semper metus ac ornare. Donec fermentum elementum enim nec tincidunt. 
          </p>
          <button className="btn button text-white">
            View now
          </button>
        </div>
      </div>
    </div>
  )
}
