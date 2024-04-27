import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import "./todo.css"
import CounterComponent from './components/CounterComponent';
import User from './components/User';
import React, {useEffect, useState} from "react";
import UserCard from './components/UserCard';

function App() {
  const [userData,setUserData]=useState(null);
  const [refresh,setRefresh]=useState(false);
  useEffect(()=>{
    User().then((user)=>setUserData(user.results[0]));
  },[refresh]);
  return (
    /*<div className="body">
      <div className="todo-container">
        <CounterComponent/>
        <Header />
        <TodoItem work="eat"/>
        <TodoItem work="code"/>
        <TodoItem work="sleep"/>
        <TodoItem work="repeat"/>
        <Button />
      </div>
    </div>*/
    <>
    {userData&&<UserCard data={userData}/>}
    <button onClick={()=>setRefresh(!refresh)}>Refresh</button>
    </>
  );
}

export default App;
