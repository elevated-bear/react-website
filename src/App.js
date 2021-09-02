import CurrentBugs from "./components/CurrentBugs";
import AddBug from "./components/AddBug";
import { useState, useEffect } from "react";

const LOCAL_STORAGE_KEY = 'BugTracker.bugs'

function App() {
  const [CurrentBugsList, setCurrentBugs] = useState([])

  useEffect(() => { // logic for persisting bugs added to the list
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(CurrentBugs))
  }, [CurrentBugs])

  return (
    <>
    <h1>BugTracker 🐛🔬</h1>
    <h5>by Lane Trobee</h5>
    <AddBug setCurrentBugs={setCurrentBugs}/>
    <CurrentBugs bugs={CurrentBugsList}/>
    </> //this is a fragment element
  );
}

export default App;
