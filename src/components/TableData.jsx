import React from 'react'

const TableData = ({data}) => {
  return (
    <>
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                        <img src={data.profile} alt="" className="h-10 w-10 rounded-full"/>
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                            {data.name}
                        </div>
                        <div className="text-sm text-gray-500">
                            {data.email}
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className={data.status === "active" ? "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800" : "px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"}>
                    {data.status}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-500">{data.role}</span>
            </td>   
        </tr>
    </>
  )
}

export default TableData