import React from "react";
function DangerPTitle({ title , content}) {
    return (
            <p>
                <strong className={"text-danger"}>{title}</strong> – {content}
            </p>
    );
}
export default DangerPTitle;