import React from "react";

export default function AddBug() {
  return (
    <div>
      <p>Add bugs to the list</p>
      <div>Bug Name</div>
      <input type="text" title="Bug Name" />
      <div>Description</div>
      <input type="text" title="Bug Description" />
      <br/>
      <button>Submit Bug Ticket</button>
    </div>
  );
}
