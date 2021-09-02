import React from "react";
import Bug from "./Bug";

export default function CurrentBugs({ bugs }) {
    return (
        bugs.map(bug => {
            return <Bug key={bug.id} bug={bug} />
        })
    )
}
