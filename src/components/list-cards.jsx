import React from "react";
import { useState } from 'react';

function ListCards(props) {
    const {likes, setLikes, index, moveLeft, moveRight, deleteItem, incrementLikes} = props;
    const [userInput, setUserInput] = useState('');
  
 return (

    <div>
      <div class="RetroCard" aria-label="Retro card">
        <textarea
          class="textbox"
          placeholder="Enter text here"
          aria-label="Enter text here"
          rows="1"
          value={userInput}
          onChange = {(e)=>{setUserInput(e.target.value)}}
        ></textarea>

        <div class="button-group">
          <button type="button" class="button button-left" title="Move left" onClick = {()=> moveLeft(index)}>
            <img src="angleLeft.svg" alt="Move left" width="12" height="12" />
          </button>
          <button type="button" class="button button-delete" title="Delete" onClick = {()=> deleteItem(index)} >
            Delete
          </button>
          <div>
            <button type="button" class="button button-left" title="Like" onClick = {()=>incrementLikes()}>
              Like {likes}
            </button>
            <button
             
              value={props.likes}
              type="button"
              class="button button-left"
              title="Dislike"
            >
              Dislike 
            </button>
            <button
              onClick = {()=> moveRight(index)}
              value={props.dislikes}
              type="button"
              class="button button-right"
              title="Move right"
            >Move right</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
