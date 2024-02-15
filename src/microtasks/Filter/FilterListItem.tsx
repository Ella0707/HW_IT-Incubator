import React from 'react';
import {moneyType} from "./FilterComponent";


type FilterItemType = {
  money: moneyType
}

export const FilterListItem = (props: FilterItemType) => {
  return (
    <li>
      <span>{props.money.banknots}</span>
      <span>{props.money.value}</span>
      <span>{props.money.number}</span>
    </li>
  );
};

