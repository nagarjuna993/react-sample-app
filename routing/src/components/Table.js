import React from 'react'

const Table = (props) => {
  const tableStyle = {
    margin: '0 auto'
  }
  return(
    <table style={tableStyle}>
      <tbody>
        <tr>
          {props.tableHeader.map(head => {
            return <th key={head}>{head}</th>
          })}
        </tr>
      
        {props.tableData.map(data => {
          return (
            <tr key={data.name}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.gender}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table