function Drawer({onCartClose, items}){
   return(
      <div className="overlay">
         <div className="drawer">
         <h2 className="h2 d-flex justify-between">Корзина <button>
               <img width={11} height={11} src="/img/remove.svg" onClick={onCartClose} alt='remove'/>
            </button></h2>

         <div className="items">
            {items.map((obj) => (
               <div className="cartItem d-flex align-center mb-20">
                  <img className="mr-15" width={120} height={80} src={obj.imageUrl} alt='Diplom'></img>
                  <div className="mr-15">
                     <p className="mb-5">{obj.title}</p>
                     <b>{obj.price} руб.</b>
                  </div>
                  <button className="removeBtn">
                     <img width={11} height={11} src="/img/remove.svg" alt='remove'></img>
                  </button>
               </div> 
            ))}
         </div>

         <div className="cartTotalBlock">
         <ul>
            <li className="d-flex justify-between align-center">
               <span>Итого:</span>
               <div></div>
               <b> руб.</b>
            </li>
            <li className="d-flex justify-between align-center">
            <span>Налог 10%:</span>
               <div></div>
               <b>500  руб.</b>
            </li>
         </ul>
         <button className="greenButton">Оформить заказ  <img src="/img/arrow.svg" alt="Arrow" /></button>
         </div>

         </div>
      </div>
   );
}

export default Drawer;