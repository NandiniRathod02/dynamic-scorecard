import React, { useState, useEffect } from "react";
import axios from "axios";

const ScoreTable = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetchScores();
    }, []);

    const fetchScores = async () => {
        try {
            const response = await axios.get("http://localhost:5000/getScores");
            console.log("Fetched Scores:", response.data);  // ✅ Debugging log
            setScores(response.data.data);
        } catch (error) {
            console.error("Error fetching scores:", error);
        }
    };

    return (
        <div>
            <h2>Performance Scores</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Productivity</th>
                        <th>Quality</th>
                        <th>Timeliness</th>
                        <th>Final Score</th>
                    </tr>
                </thead>
                <tbody>
                    {scores.length > 0 ? (
                        scores.map((entry, index) => (
                            <tr key={index}>
                                <td>{entry.name}</td>
                                <td>{entry.productivity}</td>
                                <td>{entry.quality}</td>
                                <td>{entry.timeliness}</td>
                                <td><strong>{entry.score.toFixed(2)}</strong></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No data available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ScoreTable;
