import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const [data, setData] = useState({ name: null, age: null, score: null });
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [score, setScore] = useState();
  const [receivedData, setReceivedData] = useState();

  const handleSending = async () => {
    const data = {
      name: name,
      age: age,
      score: score,
    };
    const results = await fetch(`${process.env.REACT_APP_API_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // const resultsJSON = await results.json();
    // console.log(resultsJSON);
  };

  const getDataFromServer = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/players`, {
      method: 'GET',
    });
    const data = await res.json();
    await console.log(data);
    await setReceivedData(data);
  };

  return (
    <div className='App'>
      <p>name</p>
      <input
        type='text'
        name='name'
        onChange={(e) => setName(e.target.value)}
      />
      <p>age</p>
      <input
        type='number'
        name='age'
        onChange={(e) => setAge(e.target.value)}
      />
      <p>score</p>
      <input
        type='number'
        name='score'
        onChange={(e) => setScore(e.target.value)}
      />
      <br />
      <br />
      <br />
      {/* <button onClick={handleSubmit}>prepare data</button> */}
      {/* <button onClick={handleSubmit}>save data</button> */}
      <button onClick={handleSending}>send data</button>
      <hr />
      <hr />
      <hr />
      <h1>dane</h1>
      <button onClick={getDataFromServer}>get dane</button>
      {receivedData &&
        receivedData.map((item, i) => {
          return (
            <div key={i}>
              <h1>{item.name}</h1>
              <h2>{item.age}</h2>
              <h3>{item.score}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default App;
