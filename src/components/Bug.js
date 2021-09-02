import React from "react";

export default function Bug({ bug }) {
    return (
        <div>
            <div>ID: {bug.id}</div>
            <div>Bug name: {bug.name}</div>
            <div>Bug description: {bug.desc}</div>
        </div>

    );
}
