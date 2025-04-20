import useFetch from "./useFetch";
import Person from "./Person";
import { useState } from "react";


const PersonController = () => {
  const [number, setNumber] = useState(1);

  const URL = `https://randomuser.me/api/?results=${number}`;
  const { data, isLoading, error, fetchData } = useFetch(URL);

  const handleChange = ({target}) => {
    setNumber(target.value);
  }
  return (
    <>
      <div className="person-container">
        <h1>Random User Generator</h1>

        <div className="input-group">
            <input type="number" value={ number } onChange={handleChange} min="1" />
            { !isLoading && <button onClick={ fetchData }>Random User</button> }
        </div>

        { error && <h2> { error }</h2>}
        { isLoading && <h2> Loading... </h2>}
        { data &&
          data.map((person) => (
            <Person key={ person.id.value } person={ person } />
          ))}
      </div>
    </>
  );
};

export default PersonController;
