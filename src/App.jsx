import Table from "./components/Table"
import Form from "./components/Form"
import Header from "./components/Header"
import Footer from "./components/Footer"
import WelcomeNote from "./components/WelcomeNote";
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
      const { data } = await axios.get(`https://ifeanyi-json-server-database.glitch.me/users?${key}=${property}`)

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
    <main className="App">
      <Header />
        <section className="section">
          <div className="container">
            <div className="row">
              <WelcomeNote />
              <Form
                setKey={setKey}
                setProperty={setProperty}
                setListItems={setListItems}
              />
              <Table listItems={listItems} />
            </div>
          </div>
        </section>
      <Footer />
    </main>
  );
}

export default App;
