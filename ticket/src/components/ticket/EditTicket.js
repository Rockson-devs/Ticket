import React from "react";

const EditTicket = () => {
  return (
    <>
      {/* {button to Open Modal} */}
      <button
        type="button"
        className="btn btn-warning mx-3"
        data-toggle="modal"
        data-target={"editmodal"}
      >
        Edit
      </button>
      {/* The Modal */}
      <div className="modal" id="editmodal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 modal-title>Edit </h4>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              <input type="text" className="form-control" value={""} />
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTicket;
