import React from 'react'
import Table from '../components/Table'

class ForLoop extends React.Component {
  constructor() {
    super()

    this.state = {
      tableHeader: [
        'Name', 'Age', 'Gender'
      ],
      tableData: [
        {
          name: 'John',
          age: 29,
          gender: 'Male'
        },
        {
          name: 'Carl',
          age: 34,
          gender: 'Male'
        },
        {
          name: 'Jessica',
          age: 17,
          gender: 'Female'
        },
        {
          name: 'Robert',
          age: 81,
          gender: 'Male'
        }
      ]
    }
  }

  render() {
    return(
      <div>
        <Table tableHeader={this.state.tableHeader} tableData={this.state.tableData}></Table>
      </div>
    )
  }
}

export default ForLoop;