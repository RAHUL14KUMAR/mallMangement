import React from 'react'
import {useStateValue} from '../StateProvider'

function OrderCard({image,title,price,id}) {
    const[{basket},dispatch]=useStateValue();
    const removeFromBasket=(e,id)=> {
        e.preventDefault();
  
        dispatch({
          type:'REMOVE_FROM_BASKET',
          id:id
        })
    }
  return (
    <div class="card mb-3" style={{width:540+'px',marginLeft:18+'em'}}>
        <div class="row g-0">
            <div class="col-md-4">
                <img src={image} class="img-fluid rounded-start"/>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum magnam, quod maxime reiciendis dolorem rem recusandae, natus nobis voluptatum architecto esse est inventore assumenda velit.</p>
                    <p class="card-text">₹ {price}</p>
                    <button class="btn btn-danger" onClick={(e)=>removeFromBasket(e,id)}>Remove</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderCard
