// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

// const Comparison = () => {
//     const [scores, setScores] = useState([]);
//     const [selectedNames, setSelectedNames] = useState([]);
//     const [comparisonData, setComparisonData] = useState([]);

//     useEffect(() => {
//         fetchScores();
//     }, []);

//     const fetchScores = async () => {
//         try {
//             const response = await axios.get("http://localhost:5000/getTopPerformers");
//             setScores(response.data.data);
//         } catch (error) {
//             console.error("Error fetching scores:", error);
//         }
//     };

//     const handleCompare = async () => {
//         try {
//             const response = await axios.post("http://localhost:5000/compareEntities", { names: selectedNames });
//             setComparisonData(response.data.data);
//         } catch (error) {
//             console.error("Error comparing entities:", error);
//         }
//     };

//     return (
//         <div>
//             <h2>Compare Performance</h2>

//             {/* Dropdown for selecting names */}
//             <select multiple value={selectedNames} onChange={(e) => setSelectedNames([...e.target.selectedOptions].map(o => o.value))}>
//                 {scores.map((entry, index) => (
//                     <option key={index} value={entry.name}>{entry.name}</option>
//                 ))}
//             </select>
//             <button onClick={handleCompare}>Compare</button>

//             {/* Table for displaying comparison */}
//             {comparisonData.length > 0 && (
//                 <table border="1">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Productivity</th>
//                             <th>Quality</th>
//                             <th>Timeliness</th>
//                             <th>Final Score</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {comparisonData.map((entry, index) => (
//                             <tr key={index}>
//                                 <td>{entry.name}</td>
//                                 <td>{entry.productivity}</td>
//                                 <td>{entry.quality}</td>
//                                 <td>{entry.timeliness}</td>
//                                 <td><strong>{entry.score.toFixed(2)}</strong></td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}

//             {/* Bar Chart for Comparison */}
//             {comparisonData.length > 0 && (
//                 <div>
//                     <h3>Performance Comparison (Bar Chart)</h3>
//                     <BarChart width={500} height={300} data={comparisonData}>
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Bar dataKey="productivity" fill="#8884d8" />
//                         <Bar dataKey="quality" fill="#82ca9d" />
//                         <Bar dataKey="timeliness" fill="#FFBB28" />
//                     </BarChart>
//                 </div>
//             )}

//             {/* Radar Chart for Comparison */}
//             {comparisonData.length > 0 && (
//                 <div>
//                     <h3>Performance Radar Chart</h3>
//                     <RadarChart cx={250} cy={250} outerRadius={150} width={500} height={400} data={comparisonData}>
//                         <PolarGrid />
//                         <PolarAngleAxis dataKey="name" />
//                         <PolarRadiusAxis />
//                         <Radar name="Performance" dataKey="score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
//                         <Tooltip />
//                     </RadarChart>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Comparison;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from "recharts";

const Comparison = () => {
    const [scores, setScores] = useState([]);
    const [selectedNames, setSelectedNames] = useState([]);
    const [comparisonData, setComparisonData] = useState([]);

    useEffect(() => {
        fetchScores();
    }, []);

    const fetchScores = async () => {
        try {
            const response = await axios.get("http://localhost:5000/getTopPerformers");
            console.log("Comparison Data:", response.data);  // ✅ Debugging log
            setScores(response.data.data);
        } catch (error) {
            console.error("Error fetching scores:", error);
        }
    };

    const handleCompare = async () => {
        try {
            const response = await axios.post("http://localhost:5000/compareEntities", { names: selectedNames });
            setComparisonData(response.data.data);
        } catch (error) {
            console.error("Error comparing entities:", error);
        }
    };

    return (
        <div>
            <h2>Compare Performance</h2>

            {/* Dropdown for selecting names */}
            <select multiple value={selectedNames} onChange={(e) => setSelectedNames([...e.target.selectedOptions].map(o => o.value))}>
                {scores.map((entry, index) => (
                    <option key={index} value={entry.name}>{entry.name}</option>
                ))}
            </select>
            <button onClick={handleCompare}>Compare</button>

            {/* Bar Chart for Comparison */}
            {comparisonData.length > 0 && (
                <div>
                    <h3>Performance Comparison (Bar Chart)</h3>
                    <BarChart width={500} height={300} data={comparisonData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="productivity" fill="#8884d8" />
                        <Bar dataKey="quality" fill="#82ca9d" />
                        <Bar dataKey="timeliness" fill="#FFBB28" />
                    </BarChart>
                </div>
            )}
        </div>
    );
};

export default Comparison;
