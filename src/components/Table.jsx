import React from 'react'
import TableData from './TableData'

const Table = ({listItems}) => {
  return (
    <div className="col-12">
      <div className="table-responsive">
        <table className="table tableDesign">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left uppercase">Employee</th>
              <th scope="col" className="px-6 py-3 text-left uppercase">Status</th>
              <th scope="col" className="px-6 py-3 text-left uppercase">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white" id="tbody">
            {listItems.map(data => (
              <TableData key={data.name} data={data} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table