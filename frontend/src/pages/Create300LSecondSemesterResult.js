import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create300LSecondSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "Industrial Training/Field Work", courseCode: "PHS 390", unit: "4", score: "", grade: ""},
    {courseTitle: "IT Inspection/Visitation", courseCode: "PHS 394", unit: "4", score: "", grade: ""},
    {courseTitle: "IT Report", courseCode: "PHS 396", unit: "4", score: "", grade: ""},
    {courseTitle: "IT Seminar", courseCode: "PHS 398", unit: "4", score: "", grade: ""},
    // {courseTitle: "", courseCode: "", unit: "1", score: "", grade: ""},
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
        <h2>300 Level Second Semester Result</h2>
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


export default Create300LSecondSemesterResult;