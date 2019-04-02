import React, { Component } from 'react';
import Card from './Card';
import PropTypes, { string } from 'prop-types';





const Cards = props => {

  // console.log(props.cards)
  return (
    <div className="cards-container">
      {props.cards.map(eachCard => (
        <Card key={eachCard} card={eachCard}/>        
      ))
        /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;

Cards.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string 
}