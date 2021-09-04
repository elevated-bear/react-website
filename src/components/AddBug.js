import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AddBug({setCurrentBugs}) {
    const bugNameRef = useRef()
    const bugDescRef = useRef()

    function handleAddBugTicket(e) {
        const name = bugNameRef.current.value
        const desc = bugDescRef.current.value
        if (name === '') {
            console.warn('name cannot be empty');
            return
        }
        setCurrentBugs(prevCurrentBugs => {
            return [...prevCurrentBugs, {id: uuidv4(), name:name, desc:desc}]
        })
        bugNameRef.current.value = null //clearing fields
        bugDescRef.current.value = null //clearing fields

    }

    return (
        <div>
            <div>Bug Name</div>
            <input ref={bugNameRef} type="text" title="Bug Name" />
            <div>Description</div>
            <input ref={bugDescRef} type="text" title="Bug Description" />
            <br />
            <button onClick={handleAddBugTicket}>Submit Bug Ticket</button>
        </div>
    );
}
