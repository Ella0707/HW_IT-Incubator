import React from 'react';
import {BanknotsType, MoneysObjType} from "./Filter";


type MyNewComponent = {
  moneys: MoneysObjType;
  changeFilter: Function;
}

export const NewComponent = (props: MyNewComponent) => {
  return (
    <div>
      <div>
        <ul>

           {props.moneys.myMoney.map((money, index) => {
            return (
              <li key={index}>
                <span>{props.moneys.myMoney[0].banknots}</span>
                <span>{props.moneys.myMoney[0].value}</span>
                <span>{props.moneys.myMoney[0].number}</span>
              </li>
            )
          })}

        </ul>
        <button onClick={() => props.changeFilter('ALL')}>All</button>
        <button onClick={() => props.changeFilter('RUB')}>RUB</button>
        <button onClick={() => props.changeFilter('USD')}>USD</button>
      </div>
    </div>
  );
};

export default NewComponent;