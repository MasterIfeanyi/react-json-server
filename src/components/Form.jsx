import React from 'react'
import Button from "./Button.jsx"


const Form = ({ setListItems, getData, setKey, setProperty, buildRequestUrl}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const buttonStyle1 = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"

    const buttonStyle2 = "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"

    const buttonStyle3 = "text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"


    return (
        <form action="" className="flex px-3 py-3" onSubmit={(e) => handleSubmit(e)}>
            <Button
                buttonKey="role"
                buttonText="member"
                buttonStyle={buttonStyle1}
                setListItems={setListItems}
                setKey={setKey}
                setProperty={setProperty}
                buildRequestUrl={buildRequestUrl} />
            <Button
                buttonKey="status"
                buttonText="active"
                buttonStyle={buttonStyle2}
                setListItems={setListItems}
                setKey={setKey}
                setProperty={setProperty}
                buildRequestUrl={buildRequestUrl} />
            <Button
                buttonKey="role"
                buttonText="owner"
                buttonStyle={buttonStyle3}
                setListItems={setListItems}
                setKey={setKey}
                setProperty={setProperty}
                buildRequestUrl={buildRequestUrl} />
        </form>
    )
}

export default Form