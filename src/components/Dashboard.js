import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const Dashboard = () => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        fetchScores();
    }, []);

    const fetchScores = async () => {
        try {
            const response = await axios.get("http://localhost:5000/getScores");
            console.log("Dashboard Data:", response.data);  // ✅ Debugging log
            setScores(response.data.data);
        } catch (error) {
            console.error("Error fetching scores:", error);
        }
    };

    return (
        <div>
            <h2>Performance Dashboard</h2>

            {/* Bar Chart - Comparing Scores */}
            {scores.length > 0 && (
                <div>
                    <h3>Score Comparison</h3>
                    <BarChart width={500} height={300} data={scores}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="score" fill="#8884d8" />
                    </BarChart>
                </div>
            )}

            {/* Pie Chart - Score Breakdown */}
            {scores.length > 0 && (
                <div>
                    <h3>Score Breakdown</h3>
                    <PieChart width={400} height={400}>
                        <Pie data={scores} dataKey="score" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#82ca9d" />
                        <Tooltip />
                    </PieChart>
                </div>
            )}

            {/* Radar Chart - Performance Across Criteria */}
            {scores.length > 0 && (
                <div>
                    <h3>Performance Radar Chart</h3>
                    <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={400} data={scores}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Radar name="Performance" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                        <Tooltip />
                    </RadarChart>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
