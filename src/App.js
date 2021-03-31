import './App.css';
import MediaCards from './components/media-cards'
import ListCards from './components/list-cards'
import {useState} from 'react';


function App() {
  const [listCards, setListCards] = useState([{
    item : 'go grocery shopping'
  },
  {
    item: 'pooped'
  }])

  const newListCards = (index, title) =>{
    const renderedListCards = [...listCards];
    renderedListCards[index] = {
      title: title
    }
  }
  // const [wentWell, setWentWell] = useState({});
  // const [toImprove, setToImprove] = useState({});
  // const [actionItems, setActionItems] = useState({});
  return (
    <div id = 'layout'>
      <h1>Retro Board</h1>
      <MediaCards>
      <ListCards/>
      </MediaCards>
    </div>
    
    
  );
}

export default App;
