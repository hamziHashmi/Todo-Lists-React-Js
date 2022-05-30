import React, { useState } from 'react';
import TodoLists from './TodoLists';
const App=()=>{
  const[data,setnewdata]=useState('');
  const[items,setitems]=useState([]);
  const inputEvent=(event)=>{
    const value=event.target.value;
      setnewdata(value);
  }
  const AssigData=(event)=>{
    setitems((olditems)=>{
      return[...olditems,data];
    });
    setnewdata('');
  }
  const deleteitems=(id)=>{
    alert('Item will be deleted!');
    setitems((olditems)=>{
      return olditems.filter((arrayElem,index)=>{
        return index!==id;
      })
    })
    }
  return(
<>
  <div className='main'>
  <div className='center-div'>
   <div className='todo'>
   
    <h1>To do List</h1>
    <input type='text' placeholder='Add Items'
    onChange={inputEvent} value={data}
    />
    <button onClick={AssigData}>+</button>
    <ol>
      {/* <li>{data}</li> */}
     {items.map((itemval,index)=>{
       return <TodoLists id={index}
       key={index}
        text={itemval}
        onSelect={deleteitems}
        />
     })}
    </ol>
   </div>
  </div>
  </div>
</>
);
};
export default App;