import React, { useEffect, useState } from "react";
import EditTicket from "./EditTicket";
const ListTickets = () => {
  const [tickets, setTickets] = useState([]);

  //get all tickets
  const getTickets = async () => {
    try {
      const response = await fetch("http://localhost:5000/tickets");
      const jsonData = await response.json();
      setTickets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTickets();
  }, []);
  return (
    <>
      <h1 className="text-center mt-5"> Ticket List</h1>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Ticket</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticket_id}>
              <td>{ticket.ticket_id}</td>
              <td>{ticket.ticket_description}</td>
              <td>{ticket.ticket_status}</td>
              {/* </tr>
          ))} */}
              {/* <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))} */}
              {/* <tr> */}
              {/* <td>jid202312061403</td>
            <td>Work on printer</td> */}
              {/* <td>
                <div class="form-floating">
                  <select
                    class="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                  >
                    <option value="1">new</option>
                    <option value="2">progress</option>
                    <option value="3">completed</option>
                  </select>
                </div>
              </td> */}

              <td>
                <EditTicket ticket={ticket} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTickets;
