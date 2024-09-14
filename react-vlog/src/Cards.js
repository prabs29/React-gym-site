import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
        <h1> Come and see for yourself what you're made of</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-9.jpg"
                    text="Lift your worries and your fears no matter what they might be"
                    label='Lift'
                    path='/fitness'
                     />
                  <CardItem
                    src="images/img-2.jpg"
                    text="Outrun all the stress that you might have with our cardio machines"
                    label='Cardio'
                    path='/fitness'
                     />
                     <CardItem
                    src="images/img-3.jpg"
                    text="Test your strengh with wide range of free weights to suit your needs "
                    label='Freeweights'
                    path='/fitness'
                     />
                     <CardItem
                    src="images/img-4.jpg"
                    text="Use your own body to assit your exercises with our trainers"
                    label='Callisthetics'
                    path='/fitness'
                     />
                   <CardItem
                    src="images/img-5.jpg"
                    text="Never miss your nutrient intake with our meal plans that have been designed for results"
                    label='Diet'
                    path='/diet'
                     />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards