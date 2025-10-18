import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create400LSecondSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "Quantum Mechanics II", courseCode: "PHS 412", unit: "3", score: "", grade: ""},
    {courseTitle: "Analytical Mechanics II", courseCode: "PHS 442", unit: "3", score: "", grade: ""},
    {courseTitle: "Atomic and Molecular Spectroscopy", courseCode: "PHS 450", unit: "3", score: "", grade: ""},
    {courseTitle: "Methods of Mathematical Physics II", courseCode: "PHS 472", unit: "3", score: "", grade: ""},
    {courseTitle: "Advanced Physics Laboratory II", courseCode: "PHS 492", unit: "1", score: "", grade: ""},
    {courseTitle: "Entrepreneural Studies for Physics Students", courseCode: "PHS 494", unit: "2", score: "", grade: ""},
    {courseTitle: "Post Data Seminar", courseCode: "PHS 498", unit: "1", score: "", grade: ""},
    {courseTitle: "Project", courseCode: "PHS 499", unit: "4", score: "", grade: ""},
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
        <h2>400 Level Second Semester Result</h2>
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


export default Create400LSecondSemesterResult;