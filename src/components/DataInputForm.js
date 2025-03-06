import React, { useState } from "react";
import axios from "axios";

const DataInputForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        productivity: "",
        quality: "",
        timeliness: "",
    });

    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting Data:", formData);  // ✅ Debugging Log
        
        try {
            await axios.post("http://localhost:5000/addData", formData);
            alert("Data submitted successfully!");
            setFormData({ name: "", productivity: "", quality: "", timeliness: "" });
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    

    const handleFileUpload = async () => {
        if (!file) {
            alert("Please select a file.");
            return;
        }
        const formData = new FormData();
        formData.append("file", file);
        try {
            await axios.post("http://localhost:5000/upload", formData);
            alert("File uploaded successfully!");
            setFile(null);
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    return (
        <div>
            <h2>Enter Performance Data</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="number" name="productivity" placeholder="Productivity" value={formData.productivity} onChange={handleChange} required />
                <input type="number" name="quality" placeholder="Quality" value={formData.quality} onChange={handleChange} required />
                <input type="number" name="timeliness" placeholder="Timeliness" value={formData.timeliness} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>

            <h3>Upload CSV/Excel File</h3>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    );
};

export default DataInputForm;