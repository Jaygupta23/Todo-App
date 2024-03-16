import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { removeTodo } from "../store/TodoSlice";
// import { useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";

const TOdos = () => {
  // const todos = useSelector((state) => state.todos);
  // const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [toggelBtn, setToogleBtn] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);
  const [items, setItems] = useState([]);
  const addItems = () => {
    if (!input) {
      alert("Plzz Enter some task");
    }else if(input && !toggelBtn){
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
      setToogleBtn(true)
    } 
    else {
      const allInput = { id: new Date().getTime().toString(), name: input };
      setItems([...items, allInput]);
      setInput("");
    }
  };
  const removeItem = (index) => {
    const updatedItems = items.filter((item) => {
      return index !== item.id;
    });
    setItems(updatedItems);
  };
  const removeAll = () => {
    setItems([]);
  };
  const editItem = (id) => {
    const editItem = items.find((elem) => {
      return id === elem.id;
    });
    setToogleBtn(false);
    setInput(editItem.name)
    setIsEditItem(id)
  };
  return (
    <>
      <div className="container mt-5 text-light">
        <div className="text-center" style={{ fontSize: "6rem" }}>
          📋
        </div>
        <h1 className="my-4 text-center">Todo App 👌</h1>
        <div>
          <div
            className=" d-flex col-8 offset-2"
            style={{ position: "relative" }}
          >
            <input
              type="text"
              className="form-control fs-3 ps-4"
              placeholder="✍️ Add Items..."
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {toggelBtn ? (
              <MdOutlineAdd
                className="fs-1 text-success"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "10px",
                  background: "#fff",
                }}
                onClick={addItems}
              />
            ) : (
              <MdModeEdit
                className="text-success fs-1 me-4"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "10px",
                  background: "#fff",
                }}
                onClick={addItems}
              />
            )}
          </div>
        </div>
      </div>
      <div className="mt-5 container">
        <h1 className="my-4 text-center text-light">
          Todos✌️
          <button
            className="btn btn-lg bg-success text-light px-4 fs-4 mb-2 ms-4"
            onClick={removeAll}
          >
            Remove All
          </button>
        </h1>
        <ul
          className="list-group col-8 offset-2 px-4"
          style={{ overflowY: "auto", height: "400px" }}
        >
          {items.map((todo) => (
            <li
              className="list-group-item fs-3 rounded-3 d-flex mb-2 px-4 pt-2"
              key={todo.id}
            >
              {todo.name}
              <div className=" ms-auto">
                <MdModeEdit
                  className="text-success me-3 fs-2"
                  onClick={() => {
                    editItem(todo.id);
                  }}
                />
                <FaTrashAlt
                  className="text-danger fs-3 "
                  onClick={() => {
                    removeItem(todo.id);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TOdos;
