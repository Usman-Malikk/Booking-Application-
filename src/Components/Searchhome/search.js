import React, { useEffect, useState } from "react";
import "./search.css";
import { useLocation } from 'react-router-dom'

function Search() {





 
let [placee,setPlacee]= useState('Enter destination')
    let [people,setPeople]= useState(
      {adult:"2",
      children:'0',
      room:'1'
      
    })


  return (
    <div className="searchbari">
      <h2>Search</h2>
      <form>
        <label>Destination</label>
        <input type="text" name="destination" placeholder={placee} />
        
        <label>Check-in date</label>
        <input type="text" name="Date" />
        <label>Options</label>
        <div className="alloption">
          <div className="optionsss">
            <label>Max price pernight</label>
            <input type="number" name="pricemax" placeholder="1" />
          </div>
          <div className="optionsss">
            <label>Min price pernight</label>
            <input type="number" name="pricemin" placeholder="1" />
          </div>
          <div className="optionsss">
            <label>Adult</label>
            <input type="number" name="adult" placeholder={people.adult} />
          </div>
          <div className="optionsss">
            <label>Children</label>
            <input type="number" name="children" placeholder={people.children} />
          </div>
          <div className="optionsss">
            <label>Room</label>
            <input type="number" name="room" placeholder={people.room} />
          </div>
        </div>
        <button className="formbtn" type="submit">Search</button>
      </form> 
    </div>
  );
}

export default Search;
