import axios from 'axios';


function Header(props){
   return(
      <header className="d-flex justify-between align-center"> {/* из библиотеки macro-css */}
      <div className="d-flex align-center"> {/* из библиотеки macro-css */}
        <img width={80} height={80} src="/img/logo.png" />
        <div>
          <h3 className="text-uppercase">Stuedent help</h3>
          <p className="opacity-5">Помощь в написании студенческих работ</p>
        </div>    
      </div>
      <ul className="d-flex">
        <li className="mr-30 cu-p"  onClick={props.onCartOpen}>
        <img width={20} height={20} src="/img/card.svg" />
          <span>1200 руб.</span>
        </li>
        <li>
        <img width={20} height={20} src="/img/user.svg" />
        </li>
      </ul>
    </header>
   )
}

export default Header;




// [
  // {
  //     "title":"Курсовая работа", 
  //     "price":"1 500", 
  //     "imageUrl":"/img/diplom.jpg"
  //   },
  //   {
  //     "title":"Дипломная работа", 
  //     "price":"7 500", 
  //     "imageUrl":"/img/diplom.jpg"
  //   },
  //   {
  //     "title":"Онлайн помощь", 
  //     "price":"1 500", 
  //     "imageUrl":"/img/diplom.jpg"
  //   },
  //   {
  //     "title":"Отчет о практике", 
  //     "price":"2 000", 
  //     "imageUrl":"/img/diplom.jpg"
  //   },
  //   {
  //     "title":"Реферат", 
  //     "price":"1 000", 
  //     "imageUrl":"/img/diplom.jpg"
  //   },
  //   {
  //     "title":"Персональное задание", 
  //     "price":"1 500", 
  //     "imageUrl":"/img/diplom.jpg"
  //   },
  //   {
  //     "title":"Презентация", 
  //     "price":"500", 
  //     "imageUrl":"/img/diplom.jpg"
  //   }
//   ]