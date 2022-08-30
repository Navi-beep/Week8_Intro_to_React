import { useState } from 'react';
import Navbar from "./components/Navbar";
import Button from "./components/Button";


function App(props) {
    let buttons = [
      {color: 'dark', step: 1},
      {color: 'secondary', step: 20},
    ]

    

    const [count, setCount] = useState(0);
    const [lists, setLists] = useState([]);

    function handleClick(step){
      console.log('Button has been clicked');
      setCount(count + step);
    };

    function handleListClick(e){
      e.preventDefault();
      const list = e.target.thingToDo.value;
      let newLists= [...lists, list]
      setLists(newLists)

    }

    return (
        <>
        <Navbar name='Elise' city='Chicago' />
        <div className="Birb">
          <h1>Hello Birb</h1>
          {buttons.map((b, i) => <Button color={b.color} step={b.step} key={i} handleClick={handleClick} />)}
          <form onSubmit={handleListClick}>
              <input type='text' className='form-control' list='thingToDo' />
              <input type='submit' value='Submit' />
          </form>
          {lists.map((l, idx) => <p key={idx}>{l}</p>)}
        </div>
        </>
    )
}

export default App;
