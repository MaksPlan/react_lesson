import React, { FC } from 'react';
import style from './button.module.scss';

interface IButton {
  btText: string;
  handleClick: () => void;
}

const Button: FC<IButton> = (props) => {
  const { btText, handleClick } = props;
  return (
    <button type="button" className={style.button} onClick={handleClick}>
      {btText}
    </button>
  );
};

export default Button;
