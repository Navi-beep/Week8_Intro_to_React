import { useState } from 'react';
import Navbar from "./components/Navbar";



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
        <Navbar name='Elise' city='Cat Town, USA'/>
            <div className='container'>
                <h2 className='text-center'>Please enter what you need to do for today!</h2>
                <form onSubmit={handleCatClick}>
                    <input type='text' className='form-control' name='firstList' />
                    <input type='submit' value='Submit' />
                </form>
                {lists.map((l, idx) => <p key={idx}>{l}</p>)}
            </div>
        </>
    )
}

export default App;
