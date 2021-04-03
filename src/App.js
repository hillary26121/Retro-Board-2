import "./App.css";
import ListCards from "./components/list-cards";
import { useState } from "react";

function App() {

 

  const [listCards, setListCards] = useState([
    {userInput: "hello", likes: 0, dislikes: 0, category: "went-well"},
  ]);
  const [likes, setLikes] = useState(0);

  const addListCard = (e) => {
    setListCards([
      ...listCards,
      {
        userInput: "",
        likes: 0,
        dilikes: 0,
        category: e.target.attributes.category.value,
      },
    ]);
   
  };
  
  function deleteItem() {
  /*  setListCards(
      listCards.filter((currItem, currIndex) => currIndex !== index)
    );*/
  }

  



 
  return (
    <main class="content row">
      <h1>Retro Board</h1>
      <div>
        Layout &nbsp;<button class="button button-default">Column</button>
      </div>

      <div class="RetroApp row">
        <div class="RetroCategory RetroCategory-1">
          
          <h2>Went Well</h2>
         
          <button
            onClick={addListCard}
            category={"went-well"}
            type="button"
            class="ButtonAdd button button-default"
            aria-label="Add new card"
            title="Add new card"
          >
            +
          </button>
          {listCards
            .filter((listCard) => listCard.category === 'went-well')

            .map((listCard, index) => {
              return <ListCards
                userInput={listCard.userInput}
                likes={listCard.likes}
                dislikes={listCard.dislikes}
                addListCard={addListCard}
                deleteItem={deleteItem}
                setLikes = {setLikes}
                likes = {likes}
                
               
        
              />;
            })}
            
        </div>
        

        <div class="RetroCategory RetroCategory-2">
          <h2>To Improve</h2>
          <button
            onClick={addListCard}
            category={"to-improve"}
            type="button"
            class="ButtonAdd button button-default"
            aria-label="Add to new card"
            title="Add to new card"
          >
            +
          </button>
          {listCards
            .filter((listCard) => listCard.category === 'to-improve')

            .map((listCard) => {
              return <ListCards
                userInput={listCard.userInput}
                likes={listCard.likes}
                dislikes={listCard.dislikes}
                addListCard={addListCard}
                deleteItem = {deleteItem}
                setLikes = {setLikes}
                likes = {likes}
              />;
            })}
        </div>

        <div class="RetroCategory RetroCategory-3">
          <h2>Action Items</h2>
          <button
            onClick={addListCard}
            category={"action-items"}
            type="button"
            class="ButtonAdd button button-default"
            aria-label="Add to new card"
            title="Add to new card"
          >
            +
          </button>
          {listCards
            .filter((listCard) => listCard.category === 'action-items')

            .map((listCard) => {
              return <ListCards
                userInput={listCard.userInput}
                likes={listCard.likes}
                dislikes={listCard.dislikes}
                addListCard={addListCard}
                deleteItem = {deleteItem}
                setLikes = {setLikes}
                likes = {likes}
              />;
            })}
        </div>
      </div>
    </main>
  );
}

export default App;
