import React, { useState } from 'react';
import style from './itemslist.module.scss';
import Button from '../../shared/Button';

const ItemsList = () => {
  const [chartItemsAmount, setChartItemsAmount] = useState(0);

  const [name, setName] = useState('');

  const handleItemToChart = () => {
    // console.log('button press');
    setChartItemsAmount(chartItemsAmount + 1);
  };
  const handlerAddChart = () => {
    if (chartItemsAmount < 5) setChartItemsAmount(chartItemsAmount + 1);
  };

  const handleNameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className={style.page_itemlist__wrapper}>
      <div>
        <p>{chartItemsAmount ? `Колво товаров: ${chartItemsAmount}` : 'Корзина пуста'} </p>
        {chartItemsAmount === 5 && <p>Корзина заполнена</p>}
        <Button btText="Добавить в корзину" handleClick={handlerAddChart} />
      </div>

      <div>
        <p>{name || 'Укажите имя'} </p>
        <input type="text" onChange={handleNameInput} />
      </div>
    </div>
  );
};

export default ItemsList;
