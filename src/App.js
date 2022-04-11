import Table from "./components/Table"
import Form from "./components/Form"
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import { useState, useEffect } from "react"
import axios from "axios"


function App() {


  const [listItems, setListItems] = useState([]) 
  const [key, setKey] = useState("")
  const [property, setProperty] = useState("")

  
  useEffect(() => {
    const buildRequestUrl = async () => {

    try {
      const { data } = await axios.get(`https://ifeanyi-json-server-database.herokuapp.com/users?${key}=${property}`)

      setListItems(data)

      console.log(data)

      console.log(`${key}: ${property}`)
    } catch (err) {
      console.log(err.message)
    }

  }

  buildRequestUrl()
  }, [key, property])


  return (
    <>
      <div className="App">
        <Header />
          <section className="section">
              <div className="cont">
                <h1 className="text-center text-4xl text-indigo-400 py-12">JSON Server</h1>
                <Form
                  setKey={setKey}
                  setProperty={setProperty}
                  setListItems={setListItems}
                />
                <Table listItems={listItems} />
              </div>
          </section>
        <Footer />
      </div>
    </>
  );
}

export default App;
