import React, { useState } from "react";
import DataTable from "react-data-table-component";
// import './PaginatedTable.css';

const PaginatedTable = ({ data, columns }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = [12, 11, 10, 12, 8, 4, 9, 10]; //number of rows per page
    const totalPages = rowsPerPage.length; //Calcs the total number of pages

    const startIndex = (currentPage - 1) * rowsPerPage[currentPage - 1] //calcs the start index for the current page
    const endIndex = startIndex + rowsPerPage[currentPage - 1] // calcs the end index for the current page

    const paginatedData = data.slice(startIndex, endIndex); //slice the data for the current page

    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <div className="paginatedTable">
        
        <DataTable
          columns={columns}
          data={paginatedData}
          fixedHeader
        //   pagination
        />
        <div>
          {Array(totalPages)
          .fill(0)
          .map((_, index) => (
            <button className="paginated-btn" key={index} onClick={() =>
              handlePageChange(index + 1)}>
              Page {index + 1}
              </button>
          ))}
        </div>
      </div>
    )
}

export default PaginatedTable;