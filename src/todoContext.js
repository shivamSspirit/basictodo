import React, { useState } from "react";
export const Context = React.createContext("TodoContext");

const AppContext = (props) => {
    const [Todos, setTodos] = useState([
        { id: 0, title: "this is first todo", completed: false }
    ]);

    const generateId = () => {
        const maxId = Todos.length > 0
            ? Math.max(...Todos.map(n => n.id))
            : 0
        return maxId + 1
    }

    const updateTodos = (todos) => {
        setTodos(Todos.concat({ title: todos, id: generateId(), completed: false }).reverse())
    }

    const removeTodo = (id) => {
        setTodos(Todos.filter(item => item?.id !== id))
    }

    const markTodo = (id) => {
        const newTodos = [...Todos];
        newTodos[id].completed = true;
        setTodos(newTodos);
    };

    let contextValue = {
        Todos,
        updateTodos,
        removeTodo,
        markTodo
    };

    return (
        <>
            <Context.Provider value={contextValue}>
                {props.children}
            </Context.Provider>
        </>
    );
};

export default AppContext;