import { useState } from "react";

function CodeSnippet({ children }) {
    const [copied, setCopied] = useState(false);

    function copyCode() {
        navigator.clipboard.writeText(children);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // hide "Copied!" message after 2 seconds
    }

    return (
        <div style={{ position: "relative" }}>
      <pre>
        <code className="language-html">{children}</code>
      </pre>

            <button className={"btn  btn-sm " + (copied ? " active" : "")}
                onClick={copyCode}
                style={{
                    position: "absolute",
                    top: "0",
                    right: "0",
                    margin: "1rem",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    border: "none",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
                }}
            >
                <i className={copied ? "icon-arrow-circle-down" : "icon-save"} style={{ color: "#007bff" }} />
            </button>
        </div>
    );
}


export default CodeSnippet;