import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Userlist() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      {data.map((user) => (
        <Link key={user.id} to={`/userlist/${user.id}`}>
          <li>{user.name}</li>
        </Link>
      ))}
    </>
  );
}
