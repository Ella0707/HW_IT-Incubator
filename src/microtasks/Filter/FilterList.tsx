import React from 'react';
import {FilterListItem} from "./FilterListItem";
import {MoneysType} from "./FilterComponent";
import {BanknotType} from "./FilterComponent";


type FilterListType = {
  myMoneyNew: MoneysType;
  filterBanknots: (props: BanknotType) => void;
}

export const FilterList = (props: FilterListType) => {
  return (
    <div>
      <ul>
        {props.myMoneyNew.myMoney.map((money, index) => {
          return  <FilterListItem key={index} money={money} />
        })}
      </ul>
      <button onClick={() => props.filterBanknots('ALL')}>All</button>
      <button onClick={() => props.filterBanknots('RUB')}>RUB</button>
      <button onClick={() => props.filterBanknots('USD')}>USD</button>
    </div>
  );
};

export default FilterList;