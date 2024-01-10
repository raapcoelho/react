import { useState } from 'react';
import Banner from './components/Banner'
import Form from './components/Form'

function App() {

  const [tickets, setTickets] = useState([])

  const addTicket = (ticket) => {
    console.log(ticket)
    setTickets([...tickets, ticket])
  }

  return (
    <div className="App">
      <Banner />
      <Form saveTicket={ticket => addTicket(ticket)}/>      
    </div>
  );
}

export default App;
