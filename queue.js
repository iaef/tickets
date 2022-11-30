class Queue {
  payload = [];

  enqueue = (item) => {
    this.payload.push(item);

    return this.payload.length;
  }

  dequeue = () => {
    return this.payload.shift();
  }
}

function FQueue() {
  this.payload = [];

  this.enqueue = (item) => {
    this.payload.push(item);

    return this.payload.length;
  }

  this.dequeue = () => {
    return this.payload.shift();
  }
}

module.exports = {
  Queue,
  FQueue
}