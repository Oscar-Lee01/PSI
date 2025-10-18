import React, { useEffect, useState } from "react";
import { useResultsContext } from "../hooks/useResultsContext";


// Components
import PaginatedTable from "../components/PaginatedTable";
// import ResultDetails from '../components/ResultDetails'

const ViewResults = () => {
  // const {results, dispatch} = useResultsContext()
  const [results, setResults] = useState('')

  const column = [
    {
      name: "Course Code",
      selector: row => row.courseCode,
      sortable: true,
    },
    {
      name: "Course Title",
      selector: row => row.courseTitle,
      sortable: true,
    },
    {
      name: "Unit",
      selector: row => row.unit
    },
    {
      name: "Score",
      selector: row => row.score
    },
    {
      name: "Grade",
      selector: row => row.grade,
      sortable: true
    }
  ]

  useEffect(() => {
    const fetchResults = async () => {
      const response = await fetch('http://localhost:8080/api/result/ViewResults')
      const json = await response.json();

      if (response.ok) {
        // dispatch({type: 'SET_RESULTS', payload: json})
        setResults(json)
        console.log(json)
      }
    }

    fetchResults();
  }, [])

    return (
      <div className="ViewResults">
        <div className="expand">
          <p>Results</p>

        <PaginatedTable
          columns={column}
          data={results}
        />
        </div>
        {/* {results && results.map((result) => (
          <ResultDetails key={result._id} result={result} />
        ))} */}
      </div>
    )
}


export default ViewResults;