import React from 'react'
import Card from '../Cards'
import './index.css'
const CardContainer = () => {
    const cartArr=[
        {
            title:'card1',
            img:"https://images.unsplash.com/photo-1699363177262-6fcf22c0e861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
            rating:2
        },
        {
            title:"card2",
            img:"https://images.unsplash.com/photo-1699727152109-b5b9592641ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",
            rating:5
        },
        {
            title:"card3",
            img:"https://images.unsplash.com/photo-1682685797365-41f45b562c0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D",
            rating:3
        },
        {
            title:"card4",
            img:"https://images.unsplash.com/photo-1699734825395-77d05df67aab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8fA%3D%3D",
            rating:1
        }

    ]

  return (
    <div className='card_container'>
        {
            cartArr && 
            cartArr.map((birCard,i)=>

             <Card key={i} {...birCard} />
                
            )
        }


    </div>
  )
}

export default CardContainer