import React, { useEffect, useState } from 'react'
import Choose from './choose';
import Header from './header';
import DishCard from './dishCard';
import Order from './Order';

function Resto({setNun, nun, Datas, SetDatas, filterDatas, setFilterDatas  }) {

  const [Subtotal, SetSubtotal] = useState(0);
  let total = 0;
  useEffect(()=>{
      totalDatas();
      SetSubtotal(total.toFixed(2));
      setFilterDatas(Datas)
  }, [Datas, Subtotal ])

  function totalDatas() {
    filterDatas.forEach(item => total +=( item.count * item.price))
  }

  return (
    <div className='Resto'>
      <Header setFilterDatas={setFilterDatas} Datas={Datas} />
      <Choose />
      <DishCard Datas={Datas} SetDatas={SetDatas} filterDatas={filterDatas} setFilterDatas={setFilterDatas} />
      <Order Datas={Datas} SetDatas={SetDatas} Subtotal={Subtotal} nun={nun} setNun={setNun}  />
    </div>
  )
}

export default Resto;