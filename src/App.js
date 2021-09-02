import CurrentBugs from "./components/CurrentBugs";
import AddBug from "./components/AddBug";
import { useState } from "react";

function App() {
  const [CurrentBugsList, setCurrentBugs] = useState([])
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
