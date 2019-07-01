import React from 'react';

const Paginator = (props) => {
  return(
    <div>
      <label>Page:   </label>
      <div className="ui buttons mini compact">
        <button className="ui button active">1</button>
        <button className="ui button">2</button>
        <button className="ui button">3</button>
        <button className="ui button">4</button>
        <button className="ui button">5</button>
      </div>      
    </div>
  )
}

export default Paginator;