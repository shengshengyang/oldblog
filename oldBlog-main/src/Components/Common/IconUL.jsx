import React from "react";
import {LI, UL} from "../../AbstractElements";
function IconUL({ icon , contentArray}) {
    const className = `${icon} font-secondary me-2`;
    return (
        <UL>
            {contentArray.map((content) => (
                <LI>&nbsp;&nbsp;<i className={className}></i>{content}</LI>
            ))}
        </UL>
    );
}
export default IconUL;