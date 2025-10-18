import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create200LSecondSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "Thermal Physics", courseCode: "PHS 222", unit: "3", score: "", grade: ""},
    {courseTitle: "Electronics I", courseCode: "PHS 242", unit: "3", score: "", grade: ""},
    {courseTitle: "Experimental Physics II", courseCode: "PHS 292", unit: "1", score: "", grade: ""},
    {courseTitle: "Computer Programming II", courseCode: "CSC 204", unit: "3", score: "", grade: ""},
    {courseTitle: "Ordinary Differential Equation", courseCode: "MTS 232", unit: "3", score: "", grade: ""},
    {courseTitle: "Writing & Literary Appreciation", courseCode: "GNS 201", unit: "1", score: "", grade: ""},
    {courseTitle: "Elements of Politics & Government I", courseCode: "GNS 202", unit: "1", score: "", grade: ""},
    {courseTitle: "Use of Library", courseCode: "GNS 203", unit: "1", score: "", grade: ""},
    {courseTitle: "Logic & History of Science", courseCode: "GNS 204", unit: "2", score: "", grade: ""},
    {courseTitle: "Entrepreneural Studies I", courseCode: "ETS 206", unit: "2", score: "", grade: ""},
    {courseTitle: "Introductory Material Science", courseCode: "PHS 362", unit: "3", score: "", grade: ""},
    {courseTitle: "Energy & Environment", courseCode: "PHS 364", unit: "1", score: "", grade: ""},
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
        <h2>200 Level Second Semester Result</h2>
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


export default Create200LSecondSemesterResult;