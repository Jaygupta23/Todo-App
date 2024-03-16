import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";
const TOdos = () => {
const {
  input,
  setInput,
  toggleBtn,
  items,
  removeAll,
  editItem,
  addItems,
  removeItem
 } = useContext(MyContext)

  

  console.log(items,"item");
  console.log(input,"input");
  console.log(toggleBtn,"toggle");
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
              className="form-control fs-3 ps-4 py-2"
              placeholder="✍️ Add Items..."
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            {toggleBtn ? (
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
                className="text-success fs-2 me-4"
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "15px",
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
          {items?.map((todo) => (
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