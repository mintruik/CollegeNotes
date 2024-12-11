import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.png";

const Header = ({ onSearch, onFilter, onReset }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedSession, setSelectedSession] = useState("All Sessions");
  const [selectedSemester, setSelectedSemester] = useState("All Semesters");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch && onSearch(value);
  };

  const handleProgramChange = (e) => {
    const value = e.target.value;
    setSelectedProgram(value);
    onFilter && onFilter({ program: value, session: selectedSession, semester: selectedSemester });
  };

  const handleSessionChange = (e) => {
    const value = e.target.value;
    setSelectedSession(value);
    onFilter && onFilter({ program: selectedProgram, session: value, semester: selectedSemester });
  };

  const handleSemesterChange = (e) => {
    const value = e.target.value;
    setSelectedSemester(value);
    onFilter && onFilter({ program: selectedProgram, session: selectedSession, semester: value });
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedProgram("");
    setSelectedSession("All Sessions");
    setSelectedSemester("All Semesters");
    onReset && onReset();
  };

  return (
    <header>
      <div className="header-content">
        <img src={logo} alt="University Logo" className="logo" />
        <h1>College Exam Schedule</h1>
        <p>Bachelor of Arts (Honors Economics)</p>
        
        {/* <div className="search-section">
          <div className="search-row">
            <select 
              value={selectedProgram}
              onChange={handleProgramChange}
              className="programme-select"
            >
              <option value="">Search by Programme</option>
              <option value="BA">Bachelor of Arts</option>
              <option value="BSc">Bachelor of Science</option>
            </select>
            
            <input 
              type="text" 
              className="search-box"
              placeholder="Enter your search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          
          <div className="filter-row">
            <div className="filter-group">
              <span className="filter-label">Session:</span>
              <select 
                value={selectedSession}
                onChange={handleSessionChange}
              >
                <option value="All Sessions">All Sessions</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
              </select>
              
              <span className="filter-label">Semester:</span>
              <select 
                value={selectedSemester}
                onChange={handleSemesterChange}
              >
                <option value="All Semesters">All Semesters</option>
                <option value="Semester 1">Semester 1</option>
                <option value="Semester 2">Semester 2</option>
                <option value="Semester 3">Semester 3</option>
                <option value="Semester 4">Semester 4</option>
                <option value="Semester 5">Semester 5</option>
                <option value="Semester 6">Semester 6</option>
              </select>
              
              <button className="reset-button" onClick={handleReset}>
                Reset All
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header; 