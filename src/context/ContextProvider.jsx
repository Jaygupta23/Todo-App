import { createContext, useState} from "react";

export const MyContext = createContext();

const  ContextProvider = ({ children }) => {
  const [input, setInput] = useState('');
  const [toggleBtn, setToggleBtn] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [items, setItems] = useState([]);
  
  const editItem = (id) => {
    const editItem = items.find((elem) => {
      return id === elem.id;
    });
    setToggleBtn(false);
    setInput(editItem.name)
    setIsEditItem(id)
  };
  

  const addItems = () => {
    console.log("sahfdj");
    if (!input) {
      alert("Plzz Enter some task");
    }else if(input && !toggleBtn){
      setItems(
        items.map((elem)=>{
          if(elem.id === isEditItem){
            return {...elem, name: input}
          }
          return elem;
        })
      )
      setIsEditItem(null);
      setInput("")
        setToggleBtn(true)
    } 
    else {
      const allInput = { id: new Date().getTime().toString(), name: input };
      setItems([...items, allInput]);
      setInput("");
    }
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => {
      return id !== item.id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  return(
    <MyContext.Provider
    value={{
      input,
      setInput,
      toggleBtn,
      items,
      removeAll,
      editItem,
      addItems,
      removeItem
    }}
  >
    {children}
  </MyContext.Provider>
  )
};
export default ContextProvider;