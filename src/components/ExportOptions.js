import React, { useState } from "react";
import axios from "axios";

const ExportOptions = () => {
    const [email, setEmail] = useState("");

    const downloadCSV = () => {
        window.open("http://localhost:5000/export/csv", "_blank");
    };

    const downloadExcel = () => {
        window.open("http://localhost:5000/export/excel", "_blank");
    };

    const sendEmail = async () => {
        try {
            await axios.post("http://localhost:5000/sendEmail", { email });
            alert("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };

    return (
        <div>
            <h2>Export & Share</h2>
            <button onClick={downloadCSV}>Download CSV</button>
            <button onClick={downloadExcel}>Download Excel</button>

            <h3>Send via Email</h3>
            <input
                type="email"
                placeholder="Enter recipient email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={sendEmail}>Send</button>
        </div>
    );
};

export default ExportOptions;
