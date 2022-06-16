import React from 'react'
import Button from "./Button.jsx"


const Form = ({ setListItems, getData, setKey, setProperty, buildRequestUrl}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const buttonStyle1 = "btn btn-primary form-button mx-2"

    const buttonStyle2 = "btn btn-danger form-button mx-2"

    const buttonStyle3 = "btn btn-success form-button mx-2"


    return (
        <div className="col-12">
            <form action="" className="flex px-3 py-3 row" onSubmit={(e) => handleSubmit(e)}>
                <div className="col-12">
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
                </div>
            </form>
        </div>
    )
}

export default Form