import React from 'react';

function Content({Datas, SetDatas}) {

    const deleteItem = (id) => {
        SetDatas(Datas.map( data => {
          if( data.id === id && data.count > 0){
            data.count -= 1;
          }
          return data;
        }))
      }

  return (
    <ul className='content'>
        {
            Datas.map( item => (
                <li key={item.id} className="content-items">
                    <div className="content-name">
                        <div className="content-text">
                            <img className="content-logo" src={item.img} alt="dish" />
                            <div>
                                <h3>{item.text}</h3>
                                <span>${item.price}</span>
                            </div>
                        </div>
                        <div className="content-total">
                            <span className="content-count">{item.count}</span>
                            <span>$ {(item.count * item.price).toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="content-note">
                        <div className="content-infor">
                            Please, just a little bit spicy only.
                        </div>
                        <button className="content-delete" onClick={()=>{deleteItem(item.id)} }>
                            <i className='bx bx-trash-alt'></i>
                        </button>
                    </div>
                </li>
            ) )
        }
    </ul>
  )
}

export default Content