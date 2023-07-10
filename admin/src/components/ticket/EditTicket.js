// import React, { useState } from "react";

// const EditTicket = ({ ticket }) => {
//   const [status, setStatus] = useState(ticket.ticket_status);
//   const [description, setDescription] = useState(ticket.ticket_description);

//   // console.log(status);
//   //EDIT TICKET STATUS
//   const updateStatus = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { status };

//       const response = await fetch(
//         `http://localhost:5000/tickets/${ticket.ticket_id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );
//       window.location = "/";
//     } catch (error) {}
//   };
//   return (
//     <>
//       {/* {button to Open Modal} */}
//       <button
//         type="button"
//         className="btn btn-warning mx-3"
//         data-toggle="modal"
//         data-target={`#id${ticket.ticket_id}`}
//       >
//         Edit Ticket
//       </button>
//       {/* The Modal */}
//       <div
//         className="modal"
//         id={`id${ticket.ticket_id}`}
//         // onclick={() => setStatus(ticket.ticket_status)}
//         onHide={() => setStatus(ticket.ticket_status)}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             {/* Modal Header */}
//             <div className="modal-header">
//               <h4 className="modal-title">Edit Ticket </h4>
//               <button
//                 type="button"
//                 className="close"
//                 data-dismiss="modal"
//                 // onclick={() => setDescription(ticket.ticket_description)}
//               >
//                 &times;
//               </button>
//             </div>
//             {/* Modal body */}
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 // onChange={(e) => setDescription(e.target.value)}
//                 readOnly
//               />

//               <form class="form-floating" onSubmit={updateStatus}>
//                 <select
//                   class="form-select"
//                   id="floatingSelect"
//                   aria-label="Floating label select example"
//                   // value={status}
//                   // onChange={(e) => updateStatus(e)}
//                   onChange={(e) => setStatus(e.target.value)}
//                 >
//                   {/* <option value={status}>{status}</option> */}
//                   <option
//                     value="new"
//                     // onclick={(e) => setStatus(e.target.value)}
//                   >
//                     new
//                   </option>
//                   <option
//                     value="progress"
//                     // onclick={() => setStatus(ticket.ticket_status)}
//                     onClick={() => setStatus(ticket.ticket_status)}
//                   >
//                     progress
//                   </option>
//                   <option
//                     value="completed"
//                     onclick={() => setStatus(ticket.ticket_status)}
//                   >
//                     completed
//                   </option>
//                 </select>
//               </form>
//               <div className="modal-footer">
//                 <button
//                   type="submit"
//                   className="btn btn-warning"
//                   // data-dismiss="modal"
//                   // onclick={(e) => updateStatus(e)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   data-dismiss="modal"
//                   // onClick={() => setStatus(status)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditTicket;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// first from chatGPT

// import React, { useState } from "react";

// const EditTicket = ({ ticket }) => {
//   const [status, setStatus] = useState(ticket.ticket_status);
//   const [description, setDescription] = useState(ticket.ticket_description);

//   const updateStatus = async (e) => {
//     e.preventDefault();
//     try {
//       const body = { ticket_status: status }; // Use "ticket_status" as the property name in the request body

//       const response = await fetch(
//         `http://localhost:5000/tickets/${ticket.ticket_id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(body),
//         }
//       );
//       window.location = "/";
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-warning mx-3"
//         data-toggle="modal"
//         data-target={`#id${ticket.ticket_id}`}
//       >
//         Edit Ticket
//       </button>
//       <div
//         className="modal"
//         id={`id${ticket.ticket_id}`}
//         onClick={() => setStatus(ticket.ticket_status)}
//         onHide={() => setStatus(ticket.ticket_status)}
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title">Edit Ticket</h4>
//               <button type="button" className="close" data-dismiss="modal">
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 readOnly
//               />
//               <form className="form-floating" onSubmit={updateStatus}>
//                 <select
//                   className="form-select"
//                   id="floatingSelect"
//                   aria-label="Floating label select example"
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                 >
//                   <option value="new">new</option>
//                   <option value="progress">progress</option>
//                   <option value="completed">completed</option>
//                 </select>
//                 <div className="modal-footer">
//                   <button
//                     type="submit"
//                     className="btn btn-warning"
//                     data-dismiss="modal"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     data-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditTicket;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from "react";

// const EditTicket = ({ ticket }) => {
//   const [status, setStatus] = useState(ticket.ticket_status);
//   const [description, setDescription] = useState(ticket.ticket_description);

//   const updateStatus = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/tickets/${ticket.ticket_id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ ticket_status: status }),
//         }
//       );

//       if (response.ok) {
//         window.location = "/";
//       } else {
//         console.error("Failed to update status");
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-warning mx-3"
//         data-toggle="modal"
//         data-target={`#id${ticket.ticket_id}`}
//       >
//         Edit Ticket
//       </button>
//       <div
//         className="modal"
//         id={`id${ticket.ticket_id}`}
//         onClick={() => {
//           setStatus(ticket.ticket_status);
//           setDescription(ticket.ticket_description);
//         }}
//         data-backdrop="static"
//         data-keyboard="false"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title">Edit Ticket</h4>
//               <button type="button" className="close" data-dismiss="modal">
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 readOnly
//               />
//               <form className="form-floating">
//                 <select
//                   className="form-select"
//                   id="floatingSelect"
//                   aria-label="Floating label select example"
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                 >
//                   <option value="new">new</option>
//                   <option value="progress">progress</option>
//                   <option value="completed">completed</option>
//                 </select>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-warning"
//                     onClick={updateStatus}
//                     data-dismiss="modal"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     data-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditTicket;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import React, { useState } from "react";

// const EditTicket = ({ ticket }) => {
//   const [status, setStatus] = useState(ticket.ticket_status);
//   const [description, setDescription] = useState(ticket.ticket_description);

//   const updateStatus = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5000/tickets/${ticket.ticket_id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             ticket_status: status,
//             ticket_description: description,
//           }),
//         }
//       );

//       if (response.ok) {
//         window.location = "/";
//       } else {
//         console.error("Failed to update status");
//       }
//     } catch (error) {
//       console.error("Error updating status:", error);
//     }
//   };

//   return (
//     <>
//       <button
//         type="button"
//         className="btn btn-warning mx-3"
//         data-toggle="modal"
//         data-target={`#id${ticket.ticket_id}`}
//       >
//         Edit Ticket
//       </button>
//       <div
//         className="modal"
//         id={`id${ticket.ticket_id}`}
//         onClick={() => {
//           setStatus(ticket.ticket_status);
//           setDescription(ticket.ticket_description);
//         }}
//         data-backdrop="static"
//         data-keyboard="false"
//       >
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h4 className="modal-title">Edit Ticket</h4>
//               <button type="button" className="close" data-dismiss="modal">
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <input
//                 type="text"
//                 className="form-control"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//               />
//               <form className="form-floating">
//                 <select
//                   className="form-select"
//                   id="floatingSelect"
//                   aria-label="Floating label select example"
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                 >
//                   <option value="new">new</option>
//                   <option value="progress">progress</option>
//                   <option value="completed">completed</option>
//                 </select>
//                 <div className="modal-footer">
//                   <button
//                     type="button"
//                     className="btn btn-warning"
//                     onClick={updateStatus}
//                     data-dismiss="modal"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     data-dismiss="modal"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditTicket;

// import React, { useState } from "react";
import React, { useState } from "react";

const EditTicket = ({ ticket }) => {
  const [status, setStatus] = useState(ticket.ticket_status);
  const [description, setDescription] = useState(ticket.ticket_description);

  const updateStatus = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/tickets/${ticket.ticket_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ticket_status: status,
            ticket_description: description,
          }),
        }
      );

      if (response.ok) {
        window.location = "/";
      } else {
        console.error("Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-warning mx-3"
        data-toggle="modal"
        data-target={`#id${ticket.ticket_id}`}
      >
        Edit Ticket
      </button>
      <div
        className="modal"
        id={`id${ticket.ticket_id}`}
        onClick={() => {
          setStatus(ticket.ticket_status);
          setDescription(ticket.ticket_description);
        }}
        data-backdrop="static"
        data-keyboard="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Ticket</h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <form className="form-floating">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={status}
                  // onChange={(e) => setStatus(e.target.value)}
                  // onChange={(e) => setStatus(status)}
                  // onSelect={(e) => setStatus(e.target.value)}
                >
                  <option
                    value="new"
                    onSelect={(e) => setStatus(e.target.value)}
                  >
                    new
                  </option>
                  <option
                    value="progress"
                    onSelect={(e) => setStatus(e.target.value)}
                  >
                    progress
                  </option>
                  <option
                    value="completed"
                    onSelect={(e) => setStatus(e.target.value)}
                  >
                    completed
                  </option>
                </select>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={updateStatus}
                    data-dismiss="modal"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTicket;
