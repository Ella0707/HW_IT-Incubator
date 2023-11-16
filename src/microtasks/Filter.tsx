import React, {useState} from 'react';



type typeBanknots = {
  banknots: 'ALL' | 'RUB' | 'USD'
}


const Filter = () => {

  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
  ])

  const [filter, setFilter] = useState('ALL')

  let currentMoney = money;

  if (filter === 'RUBLS') {
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
  } else if (filter === 'Dollars'){
    currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
  }

  const onClickFilterHundler = (nameButton:string) => {
        setFilter(nameButton)
  }

  return (
    <div>
      <ul>

        {currentMoney.map((objFromMoneyArr, index) => {
          return (
            <li key={index}>
              <span>{objFromMoneyArr.banknots}</span>
              <span>{objFromMoneyArr.value}</span>
              <span>{objFromMoneyArr.number}</span>
            </li>
          )
        })}

      </ul>
      <button onClick={() => onClickFilterHundler('ALL')}>All</button>
      <button onClick={() => onClickFilterHundler('RUBLS')}>RUB</button>
      <button onClick={() => onClickFilterHundler('Dollars')}>USD</button>
    </div>
  );
};

export default Filter;