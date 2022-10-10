import React from "react";

function DogInfo({dog, updateDog}) {
    if (!dog) return <h3>Select a doggo</h3>

    const {id, name, image, isGoodDog} = dog;

    function handleClick() {
        fetch(`http://localhost:3001/pups/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                isGoodDog: !isGoodDog,
            }),
        })
        .then((r) => r.json())
        .then(updateDog)
    }

    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt={name}></img>
                <h3>{name}</h3>
                <button onClick={handleClick}>{isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
            </div> 
        </div>
    )
}

export default DogInfo;