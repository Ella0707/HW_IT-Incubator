import React, {useState} from 'react';
import NewComponent from "./NewComponent";



export type BanknotsType = 'ALL' | 'RUB' | 'USD';


export type MoneysObjType = {
  myMoney: MoneyType[];
}

export type MoneyType = {
  banknots: string;
  value: number;
  number: string;
}

const Filter = () => {

  let [moneys, setMoneys]  = useState<MoneysObjType>(
    {
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
  )

  const [filter, setFilter] = useState<BanknotsType>('ALL')

  let filteredMoney = moneys.myMoney

  if (filter !== 'RUB' && filter !== 'USD') {
    let filteredMoney = moneys.myMoney

  } else

  if (filter === 'RUB') {
    filteredMoney = moneys.myMoney.filter(f => f.banknots === 'RUBLS')
    console.log('RUBLS')
  } else if (filter === 'USD'){
    filteredMoney = moneys.myMoney.filter(f => f.banknots === 'Dollars')
    console.log('USD')

  }


  const changeFilter = (filter: BanknotsType) => {
    setFilter(filter)
    console.log('click')
  }

  return (
    <NewComponent changeFilter={changeFilter} moneys={moneys}/>
  );
};

export default Filter;