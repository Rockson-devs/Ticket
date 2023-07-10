import React from "react";

const Ticket = () => {
  return (
    <>
      <h1 className="text-center mt-5"> Ticket List</h1>
      <form>
        <input type="text" className="form-control" value={""} />
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Status
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                new
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                progress
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                completed
              </a>
            </li>
          </ul>
        </div>
        <button className="btn btn-success">Add Ticket</button>
      </form>
    </>
  );
};

export default Ticket;
