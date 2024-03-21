import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserInfo() {
  const { id } = useParams();
  const [info, setInfo] = useState(null);

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((json) => setInfo(json));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Кнопка назад</button>
      {info && (
        <>
          <div className="name-username">
            <h1> {info.name}</h1>
            <h1>{info.username}</h1>
            <p>{`email: ${info.email}`}</p>
            <p>{`phone: ${info.phone}`}</p>
            <p>{`website: ${info.website}`}</p>
            <p>{`Catch phrase: ${info.company.catchPhrase}`}</p>
          </div>
        </>
      )}
    </div>
  );
}
