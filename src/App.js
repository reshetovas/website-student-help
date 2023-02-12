import React from 'react';
import axios from 'axios';
import Drawer from './components/Drawer.js';
import Header from './components/Header.js';
import Card from './components/Card';

// const arr =[
//   {
//     title:'Курсовая работа', 
//     price:'1 500', 
//     imageUrl:"/img/diplom.jpg"
//   },
//   {
//     title:'Дипломная работа', 
//     price:'7 500', 
//     imageUrl:"/img/diplom.jpg"
//   },
//   {
//     title:'Онлайн помощь', 
//     price:'1 500', 
//     imageUrl:"/img/diplom.jpg"
//   },
//   {
//     title:'Отчет о практике', 
//     price:'2 000', 
//     imageUrl:"/img/diplom.jpg"
//   },
//   {title:'Реферат', price:'1 000', imageUrl:"/img/diplom.jpg"},
// ];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false)
  const [items, setItems] = React.useState([]) //хук для карточек товаров
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue,setSearchValue] = React.useState('')


  //!!!ПОДТЯГИВАЕМ ДАННЫЕ ИЗ BackEnd!!//
  React.useEffect(()=> {
    fetch('https://639a1f2f16b0fdad7754d733.mockapi.io/items')
    .then((res) => {return res.json()})
    .then((json) => {setItems(json)});

    axios.get('https://639a1f2f16b0fdad7754d733.mockapi.io/cart').then((res) =>{
      setCartItems(res.data);
    })
  }, []); //Функция не вызывается при последующих рендерах

  //Добавление товаров в корзину
  const onAddToCart = (obj) => {
    axios.post('https://639a1f2f16b0fdad7754d733.mockapi.io/cart', obj)


   // setCartItems(prev => [...cartItems, obj]) //...cartItems оставляет старые данные массива и делаяет новый элемент obj
  };


  // const onClickCart = () => {
  //   setCartOpened(!cartOpened)
  // }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  return <div className="wrapper clear">

    {cartOpened && <Drawer setCartItems items={cartItems} onCartClose={() =>setCartOpened(false)}/>}  {/* Если cartOpened = true, от компанента Drawer исполняется */}

    <Header 
      setCartOpened cartOpened
      onCartOpen={() => setCartOpened(true)}
    />

    <div className="content p-40">

      <div className="d-flex justify-between align-center mb-40">
        <h1>{searchValue ? `Все услуги: ${searchValue}`: 'Все услуги'}</h1> {/* Если в searchValue что-то есть выводим первое значение, если ничегонет - второе */}
        <div className="search-block d-flex"> 
          <img src="/img/search.svg" alt="Search"></ img>
          {searchValue && (
            <img 
              className='clear'
              onClick={() => setSearchValue('')} 
              src="/img/remove.svg" 
              alt='remove'
            /> 
            )}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder=" Поиск..."/>
        </div>
      </div>
      
       <div className="d-flex flex-wrap"> {/*flex-wrap - перенос контента */}

      {/* метод .forEach- ничего не возвращает */}
      {
        items
        .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        .map((item, index) => (
          <Card 
            key={index}
            title={item.title}
            price={item.price} //Если хотим передать число ставим {2500}, если массив {[1,2,3]}
            imageUrl={item.imageUrl}
            onClickFavorite={() => console.log('Добавить в избранное')}
            onClickAdd={(obj) => onAddToCart(obj)} //obj - переменная функции
          />
      ))},



      {/* <Card 
        title='Дипломная работа'
        price='7 500'
        imageUrl="/img/diplom.jpg"
      />

      <Card 
        title='Отчет о практике'
        price='2 000'
        imageUrl="/img/diplom.jpg"
      />

      <Card 
        title='Реферат'
        price='1 000'
        imageUrl="/img/diplom.jpg"
      />
      
      <Card 
        title='Онлайн-помощь'
        price='1 000'
        imageUrl="/img/diplom.jpg"
      />

      <Card 
        title='Индивидуальное задание'
        price='1 500'
        imageUrl="/img/diplom.jpg"
      />

      <Card 
        title='Презентация'
        price='500'
        imageUrl="/img/diplom.jpg"
      /> */}

       {/* {
        arr.map((obj) => (
        <Card />
        ))} */}
        
      </div>

      ....
    </div>

   </div>;
};

export default App;