import PropTypes from 'prop-types';

function ListCards(props){
    console.log(props)
    return(
     <div>
         <input type="text" placeholder = "Item" aria-label = "Item" value = {props.title}/>
     </div>
    )
}

export default ListCards;