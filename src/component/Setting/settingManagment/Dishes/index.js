import React, { useEffect, useState } from 'react';

function Dishes({filterDatas, Datas, SetDatas, setFilterDatas, isCorrect, setIsCorrect}) {

  const [removeDatas, setRemoveDatas] = useState([]) 

  const addItemHandler = () => {
    setIsCorrect(!isCorrect)
  }

  const editItemHandler = (id) => {
    if(Datas.length > 1) {
      setRemoveDatas(Datas.filter(item => !(item.id === id)));
    }
    
  }

  useEffect(()=>{
    setFilterDatas(removeDatas);
  }, [removeDatas, SetDatas])
  return (
    <div className="Dishes">
        <div className="addDish" onClick={addItemHandler}>
              <div className="plus">
                  <span>+</span>
                  <h3>Add new dish</h3>
              </div>
        </div>
        {filterDatas.map(item => (
          <div key={item.id} className="editDishes" >
              <img src={item.img} alt="dish" />
              <h3>{item.text}</h3>
              <span>${item.price} - {item.bowls} Bowls </span>
              <div className="edit-btn" onClick={()=>{editItemHandler(item.id)}}>
                <i className='bx bx-trash-alt' ></i> 
                  <span>Remove dish</span>
              </div>
          </div>
        ))}
        
    </div>
  )
}

export default Dishes;