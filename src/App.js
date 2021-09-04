import CurrentBugs from "./components/CurrentBugs";
import AddBug from "./components/AddBug";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = 'BugTracker.bugs'

function App() {
  const [CurrentBugsList, setCurrentBugs] = useState([])

  useEffect(() => { //logic to load bug list from local storage
    const storedBugs = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedBugs) setCurrentBugs(storedBugs)
  }, []) //since this local empty array will never change, this effect is called once

  useEffect(() => { // logic for persisting bugs added to the list
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(CurrentBugsList))
  }, [CurrentBugsList])

  return (
    <>
    <h1>BugTracker 🐛🔬</h1>
    <h5>by Lane Trobee</h5>
    <h3>Add a bug</h3>
    <AddBug setCurrentBugs={setCurrentBugs}/>
    <h3>Existing Bugs</h3>
    <CurrentBugs bugs={CurrentBugsList}/>
    </> //this is a fragment element
  );
}

export default App;
