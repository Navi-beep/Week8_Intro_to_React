import { useState } from 'react';
import Navbar from "./components/Navbar";
//import cockatiel from "cockatiel.png";



function App(props) {
    
    const [lists, setLists] = useState([]);

    function handleCatClick(e){
      e.preventDefault();
      const list = e.target.firstList.value;
      let newLists = [...lists, list]
      setLists(newLists)

    }

    return (
        <>
        <Navbar name='Elise'/>
            <div className='container justify-content-center'>
              
                <h2 className='text-center'>Please enter what you need to do for today!</h2>
                <div class='row bg-primary rounded-3'>
                <form onSubmit={handleCatClick}>
                    <input type='text' className='d-flex form-control w-100 mt-3' name='firstList' />
                    <input type='submit'
                    className='text-center mt-3'
                    value='Add to List' />
                </form>
                {lists.map((l, idx) => <p key={idx}>{l}</p>)}
                </div>
            </div>
        </>
    )
}

export default App;


//<a href="https://www.flaticon.com/free-icons/cockatiel" title="cockatiel icons">Cockatiel icons created by Freepik - Flaticon</a>
