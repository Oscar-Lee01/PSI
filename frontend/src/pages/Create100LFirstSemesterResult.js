import { useState } from "react";

import "./CreateResult.css";
import { Modal } from "../components/Modal";
import { Table } from "../components/Table";

const Create100LFirstSemesterResult = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const [rows, setRows] = useState([
    {courseTitle: "General Physics I", courseCode: "PHS 101", unit: "3", score: "", grade: ""},
    {courseTitle: "Physics Laboratory I", courseCode: "PHS 191", unit: "1", score: "", grade: ""},
    {courseTitle: "Algebra", courseCode: "MTS 101", unit: "3", score: "", grade: ""},
    {courseTitle: "Vectors & Geometry", courseCode: "MTS 103", unit: "2", score: "", grade: ""},
    {courseTitle: "General Biology I", courseCode: "BIO 101", unit: "2", score: "", grade: ""},
    {courseTitle: "Introduction to Physiology", courseCode: "BIO 103", unit: "2", score: "", grade: ""},
    {courseTitle: "Practical Biology", courseCode: "BIO 191", unit: "1", score: "", grade: ""},
    {courseTitle: "Physical Chemistry I", courseCode: "CHM 101", unit: "3", score: "", grade: ""},
    {courseTitle: "Practical Chemistry I", courseCode: "CHM 191", unit: "1", score: "", grade: ""},
    {courseTitle: "Use of English", courseCode: "GNS 101", unit: "2", score: "", grade: ""},
    {courseTitle: "Introduction to Social Problems", courseCode: "GNS 111", unit: "1", score: "", grade: ""},
    {courseTitle: "Introduction to Computer Science", courseCode: "CSC 101", unit: "3", score: "", grade: ""},
  ]);
  // const [errors, setErrors] = useState(null)

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
  const handleSubmit = async (newRow) => {
    // try {
    //   const response = await fetch('/api/result/CreateResult', {
    //             method: 'POST',
    //             body: JSON.stringify(formState),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const json = await response.json()
    
    //         if (!response.ok) {
    //             setErrors(json.errors)
    //             console.log(json.errors)
    //         }
    //         if (response.ok) {
    //             setErrors(null)
    //             console.log('New Result Added')
    //         }
            rowToEdit === null ?
            setRows([...rows, newRow]) :
            setRows(rows.map((currRow, idx) => {
              if (idx !== rowToEdit)
              return currRow;

              return newRow;
            }))
    // } catch (error) {
    //   console.log("Error", errors)
    // }

  };


    return (
      <div className="CreateResult">
        <h2>100 Level First Semester Result</h2>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} handleSubmit={handleSubmit}/>
        
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


export default Create100LFirstSemesterResult;