import React from "react";
function PrimaryPTitle({ title , content}) {
    return (
            <p>
                <span className={"text-primary"}>{title}</span> – {content}
            </p>
    );
}
export default PrimaryPTitle;