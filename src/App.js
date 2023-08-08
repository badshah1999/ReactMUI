import Header from "./components/Header";
import Add from "./components/Add";
import Content from "./components/Content";
import { useState } from "react";


function App() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [items,setItems] = useState([])
  const addItem=(name,email)=>{
    const id = items.length?items[items.length-1].id+1:1
    const list = {id,name,email}
    const newList = [...items,list]
    setItems(newList)
    setName('')
    setEmail('')
  }
  const deleteItem=(id)=>{
    const item = items.filter(item=>item.id!==id)
    setItems(item)
  }
  return (
    <div className="App">
      <Header />
      <Add
      name={name}
      setName={setName}
      email={email}
      setEmail={setEmail}
      addItem={addItem}
      />
      <Content
      items={items}
      deleteItem={deleteItem}
      />
    </div>
  );
}
export default App;
