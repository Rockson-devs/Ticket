import React from "react";
import EditTicket from "./EditTicket";
const ListTickets = () => {
  return (
    <>
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
          {/* {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
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
          <tr>
            <td>jid202312061403</td>
            <td>Work on printer</td>

            <td>
              <button className="btn btn-white">New</button>
            </td>

            <td>
              <EditTicket />
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListTickets;
