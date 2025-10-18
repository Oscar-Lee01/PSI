import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create300LFirstSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "Analytical Mechanics I", courseCode: "PHS 311", unit: "3", score: "", grade: ""},
    {courseTitle: "Quantum Physics", courseCode: "PHS 351", unit: "3", score: "", grade: ""},
    {courseTitle: "Electromagnetism", courseCode: "PHS 341", unit: "3", score: "", grade: ""},
    {courseTitle: "Introductory Solid State Physics", courseCode: "PHS 361", unit: "3", score: "", grade: ""},
    {courseTitle: "Advanced Physics Laboratory I", courseCode: "PHS 391", unit: "1", score: "", grade: ""},
    {courseTitle: "Introductory Nuclear Physics", courseCode: "PHS 353", unit: "3", score: "", grade: ""},
    // {courseTitle: "", courseCode: "", unit: "1", score: "", grade: ""},
    // {courseTitle: "", courseCode: "", unit: "3", score: "", grade: ""},
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
        <h2>300 Level First Semester Result</h2>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow}/>
        <button className="btn" onClick={() => setModalOpen(true)}>
          ADD
        </button>
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


export default Create300LFirstSemesterResult;