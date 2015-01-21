/**
* A queue for storing callback methods to support asynchronous method queue chaining
*/

var Queue = function() {
  // store callbacks
  this._callbacks = [];
  // keep a reference to response
  this._response = null;
  // queue starts off unflushed
  this._flushed = false;
}

Queue.prototype = {
  // add callback to queue
  add: function(fn) {
    // if the queue had been flushed, return immediately
    if (this._flushed) {
      fn(this._response);
    } else {
      this._callbacks.push(fn);
    }
  },

  flush: function(response) {
    // note: flush only once
    if (this._flushed) {
      return;
    }
    // store response for subsequent calls after flush
    this._response = response;
    // mark that it has been flushed
    this._flushed = true;
    // call callbacks
    while (this._callbacks.length > 0) {
      this._callbacks.shift()(response);
    }
  }
}

module.exports = Queue;