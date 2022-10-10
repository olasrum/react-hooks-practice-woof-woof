import React, {useEffect, useState} from "react";
import DogBar from "./DogBar";
import Filter from "./Filter";
import DogInfo from "./DogInfo";

function App() {
  const [dogs, setDogs] = useState([]);
  const [selectDogID, setSelectDogID] = useState(null)
  const [goodDogs, setGoodDogs] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/pups")
    .then((r) => r.json())
    .then((dogs) => setDogs(dogs))
  }, []) 

  function updateDog(updatedDog) {
    const updatedDogs = dogs.map((dog) => 
    dog.id === updatedDog.id ? updatedDog : dog);
    setDogs(updatedDogs)
  }

  function handleToggleFilter() {
    setGoodDogs((goodDogs) => !goodDogs);
  }

  const selectDog = dogs.find((dog) => dog.id === selectDogID)

  let displayDogs = dogs;
  if (goodDogs) {
    displayDogs = displayDogs.filter((dog) => dog.isGoodDog);
  }

  return (
    <div className="App">
      <Filter filter={goodDogs} onToggleFilter={handleToggleFilter}/>
      <DogBar dogs={displayDogs} onClickDog={setSelectDogID}/>
      <DogInfo dog={selectDog} updateDog={updateDog}/>
    </div>
  );
}

export default App;
