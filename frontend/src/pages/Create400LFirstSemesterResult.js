import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create400LFirstSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "Quantum Mechanics I", courseCode: "PHS 411", unit: "3", score: "", grade: ""},
    {courseTitle: "Statistical and Thermal Physics", courseCode: "PHS 421", unit: "3", score: "", grade: ""},
    {courseTitle: "Electromagnetic Waves and Optics", courseCode: "PHS 441", unit: "3", score: "", grade: ""},
    {courseTitle: "Solid State Physics", courseCode: "PHS 461", unit: "3", score: "", grade: ""},
    {courseTitle: "Methods of Mathematical Physics I", courseCode: "PHS 471", unit: "3", score: "", grade: ""},
    {courseTitle: "Computational Physics", courseCode: "PHS 473", unit: "3", score: "", grade: ""},
    {courseTitle: "Pre Data Seminar", courseCode: "PHS 497", unit: "1", score: "", grade: ""},
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
        <h2>400 Level First Semester Result</h2>
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


export default Create400LFirstSemesterResult;