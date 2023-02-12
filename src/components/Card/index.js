import styles from './Card.module.scss'
import React from 'react';

function Card({onClickFavorite, title, price, imageUrl, onClickAdd}){

   const [isAdded, setIsAdded] = React.useState(false);

   const onClickPlus = ({}) => {
      onClickAdd({title, price, imageUrl}) //переменная obj = {title, price, imageUrl} => функция onClickAdd выполняется этими данными
      setIsAdded(!isAdded) // Инвертируется значение isAdded, то есть обратное значение
   }


   // const onClickButton = (a) => {
   //    console.log(Date(a.timeStamp));      
   // };

   return (
      <div className={styles.card}>
         <div className={styles.favorite}>
            <img src="/img/heart-unliked.svg" alt='Favorite' onClick={onClickFavorite}></img>
         </div>
         <img width={133} height={90} src={imageUrl}alt='Diplom'></img>
         <h5 className="mb-40">{title}</h5>
         <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
               <span>Цена: </span>
               <b>от {price} руб.</b>
            </div>
            <img className={styles.plus} onClick={onClickPlus}  src={ isAdded ? "/img/btn-checked.svg": "/img/btn-plus.svg"}>
            </img>
            {/* <button className="button" onClick={onClickAdd} src="/img/btn-checked.svg">
               <img width={11} height={11} src="/img/add.svg" alt='add'></img>

               { isAdded ? "/img/btn-plus.svg" : "/img/btn-checked.svg"}

            </button> */}
         </div>
      </div>
   );
}

export default Card;