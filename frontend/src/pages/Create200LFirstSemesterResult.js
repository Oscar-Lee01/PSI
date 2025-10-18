import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create200LFirstSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "Classical Physics I", courseCode: "PHS 211", unit: "2", score: "", grade: ""},
    {courseTitle: "Waves and Optics", courseCode: "PHS 231", unit: "3", score: "", grade: ""},
    {courseTitle: "Introduction to Space Physics", courseCode: "PHS 233", unit: "2", score: "", grade: ""},
    {courseTitle: "Introduction to Modern Physics", courseCode: "PHS 251", unit: "3", score: "", grade: ""},
    {courseTitle: "Experimental Physics I", courseCode: "PHS 291", unit: "1", score: "", grade: ""},
    {courseTitle: "Computer Programming I", courseCode: "CSC 203", unit: "3", score: "", grade: ""},
    {courseTitle: "Mathematical Method I", courseCode: "MTS 241", unit: "3", score: "", grade: ""},
    {courseTitle: "Statistics for Physical Science & Engineering", courseCode: "STS 203", unit: "3", score: "", grade: ""},
    {courseTitle: "Workshop Practice", courseCode: "AGE 321", unit: "2", score: "", grade: ""},
    {courseTitle: "Real Analysis I", courseCode: "MTS 223", unit: "3", score: "", grade: ""},
  ]);

  // Logic for editing a particular row at an index
  const [rowToEdit, setRowToEdit] = useState(null)

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  }

  // logic for deleting a particular row at an index
  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  // Adding a new row
  const handleSubmit = (newRow) => {
    rowToEdit === null ?
    setRows([...rows, newRow]) :
    setRows(rows.map((currRow, idx) => {
      if (idx !== rowToEdit)
        return currRow;

      return newRow;
    }))
  };

    return (
      <div className="CreateResult">
        <h2>200 Level First Semester Result</h2>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        {/* <button className="btn" onClick={() => setModalOpen(true)}>
          ADD
        </button> */}
        {modalOpen && (
          <Modal
            closeModal={() => {
              setModalOpen(false);
              setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
          />
        )}
      </div>
    )
}


export default Create200LFirstSemesterResult;