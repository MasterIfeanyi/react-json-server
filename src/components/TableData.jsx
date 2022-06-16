import React from 'react'

const TableData = ({data}) => {
  return (
    <>
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="d-flex align-items-center">
                    <div className="table-image me-2">
                        <img src={data.profile} className="" alt=""/>
                    </div>
                    <div className="">
                        <div className="">
                            {data.name}
                        </div>
                        <div className="">
                            {data.email}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={data.status === "active" ? "px-2 text-success" : "px-2 text-danger"}>
                    {data.status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm">{data.role}</span>
            </td>   
        </tr>
    </>
  )
}

export default TableData