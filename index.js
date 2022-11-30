const QueueLib = require("./queue");
const Ticket = require("./ticket");

const tickets = new QueueLib.FQueue();

for (let t = 0; t < 12; t++) {
  const id = Math.floor(Math.random() * 2000);
  const ticket = new Ticket.Ticket(id, "AbC");

  tickets.enqueue(ticket);
}

for (let t = 0; t < 6; t++) {
  console.log(tickets.dequeue());
}

console.log(tickets.payload);