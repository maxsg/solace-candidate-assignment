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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <main className="m-6">
      <h1 className="text-2xl font-bold mb-6">Solace Advocates</h1>

      <div className="mb-6">
        <label
          htmlFor="search-input"
          className="block text-lg font-medium mb-2"
        >
          Search
        </label>
        <input
          id="search-input"
          className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search advocates..."
        />
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleReset}
        >
          Reset Search
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
            <th className="border border-gray-300 px-4 py-2">Degree</th>
            <th className="border border-gray-300 px-4 py-2">Specialties</th>
            <th className="border border-gray-300 px-4 py-2">
              Years of Experience
            </th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                {advocate.firstName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {advocate.lastName}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {advocate.city}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {advocate.degree}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {advocate.specialties.map((s, idx) => (
                  <div key={idx}>{s}</div>
                ))}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {advocate.yearsOfExperience}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {advocate.phoneNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
