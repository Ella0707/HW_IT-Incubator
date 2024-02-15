import React, {useState} from 'react';
import FilterList from "./FilterList";

export type moneyType = {
  banknots: string;
  value: number;
  number: string;
}


export type MoneysType = {
  myMoney: moneyType[];
}

export type BanknotType = 'ALL' | 'USD' | 'RUB'

export const FilterComponent = () => {

  const moneys = {
    myMoney: [
      { banknots: 'Dollars', value: 100, number: ' a1234567890' },
      { banknots: 'Dollars', value: 50, number: ' z1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
      { banknots: 'Dollars', value: 100, number: ' e1234567890' },
      { banknots: 'Dollars', value: 50, number: ' c1234567890' },
      { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
      { banknots: 'Dollars', value: 50, number: ' x1234567890' },
      { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]
  }


  const [filter, setFilter] = useState<BanknotType>('ALL')

  if (filter === 'RUB') {
    moneys.myMoney = moneys.myMoney.filter(f => f.banknots === 'RUBLS')
    console.log('click RUB')

  } else if (filter === 'USD') {
    moneys.myMoney = moneys.myMoney.filter(f => f.banknots === 'Dollars')
    console.log('click USD')
  }

  const onClickFilterHundler = (nameButton: BanknotType) => {
    setFilter(nameButton)
  }

  return (
    <div>
      <FilterList  myMoneyNew={moneys} filterBanknots={onClickFilterHundler}/>
    </div>
  );
};

export default FilterComponent;