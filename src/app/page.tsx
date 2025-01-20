"use client";

import { useEffect, useState, useMemo } from "react";

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAdvocates = async () => {
      try {
        console.log("Fetching advocates...");
        const response = await fetch("/api/advocates");
        const data = await response.json();
        setAdvocates(data.data || []);
      } catch (error) {
        console.error("Error fetching advocates:", error);
      }
    };

    fetchAdvocates();
  }, []);

  const filteredAdvocates = useMemo(() => {
    if (!searchTerm) return advocates;

    const lowercasedSearchTerm = searchTerm.toLowerCase();
    return advocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(lowercasedSearchTerm) ||
        advocate.lastName.toLowerCase().includes(lowercasedSearchTerm) ||
        advocate.city.toLowerCase().includes(lowercasedSearchTerm) ||
        advocate.degree.toLowerCase().includes(lowercasedSearchTerm) ||
        advocate.specialties.some((s) =>
          s.toLowerCase().includes(lowercasedSearchTerm)
        ) ||
        advocate.yearsOfExperience.toString().includes(lowercasedSearchTerm)
      );
    });
  }, [advocates, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  const styles = {
    container: { margin: "24px" },
    input: { border: "1px solid black", padding: "4px" },
    table: { width: "100%", borderCollapse: "collapse", marginTop: "16px" },
    th: { border: "1px solid black", padding: "8px", textAlign: "left" },
    td: { border: "1px solid black", padding: "8px" },
  };

  return (
    <main style={styles.container}>
      <h1>Solace Advocates</h1>

      <div>
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          style={styles.input}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search advocates..."
        />
        <button onClick={handleReset}>Reset Search</button>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>First Name</th>
            <th style={styles.th}>Last Name</th>
            <th style={styles.th}>City</th>
            <th style={styles.th}>Degree</th>
            <th style={styles.th}>Specialties</th>
            <th style={styles.th}>Years of Experience</th>
            <th style={styles.th}>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate, index) => (
            <tr key={index}>
              <td style={styles.td}>{advocate.firstName}</td>
              <td style={styles.td}>{advocate.lastName}</td>
              <td style={styles.td}>{advocate.city}</td>
              <td style={styles.td}>{advocate.degree}</td>
              <td style={styles.td}>
                {advocate.specialties.map((s, idx) => (
                  <div key={idx}>{s}</div>
                ))}
              </td>
              <td style={styles.td}>{advocate.yearsOfExperience}</td>
              <td style={styles.td}>{advocate.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
