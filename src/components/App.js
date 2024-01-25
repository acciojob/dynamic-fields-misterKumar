
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [userData, setUserData] = useState([{ name: '', age: '' }])
  function setUserName(e, i) {
    let currentUserData = [...userData]
    currentUserData[i].name = e.target.value
    setUserData(currentUserData)
  }
  function setUserAge(e, i) {
    let currentUserData = [...userData]
    currentUserData[i].age = e.target.value
    setUserData(currentUserData)
  }
  function deleteUserData(i) {
    let filteredData = userData.filter((el, ind) => ind != i)
    setUserData(filteredData)
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <form>
        {
          userData.map((el, i) => {
            return (
              <div key={i}>
                <input name="name" type="text" placeholder="name" onChange={e => setUserName(e, i)} />
                <input name="age" type="number" placeholder="age" onChange={e => setUserAge(e, i)} />
                <button onClick={() => deleteUserData(i)} >Remove</button>
              </div>
            )
          })
        }
      </form>
      <div>
        <button onClick={() => setUserData([...userData, { name: '', age: '' }])} >Add More..</button>
        <button onClick={() => console.log(userData)} >Submit</button>
      </div>
    </div>
  )
}

export default App