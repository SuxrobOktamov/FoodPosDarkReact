import React from 'react';

function DishCard({Datas, SetDatas, filterDatas}) {

  const addItem = (id) => {
    SetDatas(Datas.map( data => {
      if( data.id === id ){
        data.count += 1;
      }
      return data;
    }))
  }

  return (
    <div className="dishCard">
        {filterDatas.map( (item) => (
            <div key={item.id} className="card" onClick={()=>{addItem(item.id)}}>
                <img className="card-logo" src={item.img} alt="dish" />
                <h3>{item.text}</h3>
                <span>${item.price}</span>
                <p> {item.bowls} Bowls available</p>
            </div>
        ) )}
    </div>
  )
}

export default DishCard ;