import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.component";

function App() {
  //const users = [];
  const [users, setUsers] = useState([]);
  const [filteredUsers, setfilteredUser] = useState(users);
  const [filterStr, setfilterStr] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    setfilteredUser(
      users.filter((user) => user.name.toLowerCase().includes(filterStr))
    );
  }, [users, filterStr]);

  const onSearchChange = (event) => {
    console.log(event.target.value);
    setfilterStr(event.target.value.toLowerCase());
  };

  return (
    <div className="App">
      <div className="col-md-12">Search</div>
      <div className="col-md-12">
        <input
          type="search"
          className="form-control"
          placeholder="Search Text"
          onChange={onSearchChange}
        ></input>
      </div>
      <CardList xusers={filteredUsers} />
    </div>
  );
}

export default App;
