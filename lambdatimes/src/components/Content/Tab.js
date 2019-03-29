import React from 'react';
import PropTypes, { string } from 'prop-types';


const Tab = props => {

  console.log(props.selectTabHandler)
  
  
    var doggy = ''
    if (props.tab === props.selectedTab) {
      doggy = 'tab active-tab'
    } else {
      doggy = 'tab'
    }
  
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

      // console.log(props.tab)
  return (
    
    <div
      className={doggy}
      onClick={() => {
        props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}

      
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {

}