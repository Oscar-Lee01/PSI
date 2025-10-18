import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create100LSecondSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "General Physics II", courseCode: "PHS 102", unit: "3", score: "", grade: ""},
    {courseTitle: "Physics Laboratory II", courseCode: "PHS 192", unit: "1", score: "", grade: ""},
    {courseTitle: "Calculus and Trigonometry", courseCode: "MTS 102", unit: "3", score: "", grade: ""},
    {courseTitle: "Mechanics", courseCode: "MTS 104", unit: "3", score: "", grade: ""},
    {courseTitle: "General Biology II", courseCode: "BIO 102", unit: "2", score: "", grade: ""},
    {courseTitle: "Practical Biology II", courseCode: "BIO 192", unit: "1", score: "", grade: ""},
    {courseTitle: "Introductory Organic Chemistry", courseCode: "CHM 102", unit: "2", score: "", grade: ""},
    {courseTitle: "Introductory Inorganic Chemistry", courseCode: "CHM 104", unit: "2", score: "", grade: ""},
    {courseTitle: "Practical Chemistry II", courseCode: "CHM 192", unit: "1", score: "", grade: ""},
    {courseTitle: "Introduction to Nigerian History", courseCode: "GNS 102", unit: "1", score: "", grade: ""},
    {courseTitle: "Introduction to Computer Algorithm Techniques", courseCode: "CSC 102", unit: "2", score: "", grade: ""},
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
        <h2>100 Level Second Semester Result</h2>
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


export default Create100LSecondSemesterResult;