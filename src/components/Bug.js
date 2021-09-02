import React from "react";

export default function Bug({ bug }) {

    const bugBubble = {
        border: "2px solid green",
        'border-radius': "0.5rem",
        padding: "0.5rem",
        margin: "0.5rem"
    }

    return (
        <div style={bugBubble}>
            <div>ID: {bug.id}</div>
            <div>Bug name: {bug.name}</div>
            <div>Bug description: {bug.desc}</div>
        </div>

    );
}
