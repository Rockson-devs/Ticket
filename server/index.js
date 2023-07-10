const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a ticket
app.post("/tickets", async (req, res) => {
  try {
    console.log("ticket added");
  } catch (err) {
    console.error(err.message);
  }
});

//get all todos
app.get("/tickets", async (req, res) => {
  try {
    const allTickets = await pool.query("SELECT * FROM ticket");
    res.json(allTickets.rows);
    // console.log("all tickets");
  } catch (err) {
    console.error(err.message);
  }
});

//get a ticket
app.get("ticket/:id", async (req, res) => {
  try {
    console.log("one ticket");
  } catch (error) {
    console.error(err.message);
  }
});

//update a todo
app.put("/tickets/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    console.log(req.body);
    const { ticket_status } = req.body;
    // console.log(status);
    const updateStatus = await pool.query(
      "UPDATE ticket SET ticket_status = $1 WHERE ticket_id = $2",
      [ticket_status, id]
    );
    res.json("ticket updated succesfully!");
    console.log("ticket updated");
  } catch (err) {
    // console.error(err.message);
    console.error("Error updating ticket status:", err);
    res.status(500).json({ error: "Failed to update ticket status" });
  }
});

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
