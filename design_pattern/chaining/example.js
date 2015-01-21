var Queue = require('./queue_chaining');

// Assume we have
function slow(callback) {
  setTimeout(function(){
    if (Math.random() > 0.5) {
        console.log("Error!");
        return callback("Error 417", null)
    }
    console.log("Success!");
    return callback(null, {id:123})
  }, 500);
}

// We want to support following chaining
exec(slow).done(function(data){
  console.log(data);
}).fail(function(err){
  console.log("Error: " + err);
});

// Implement
// function exec(fn) { ... }

// Answer
function exec(fn) {
  var promise = {
    queue: new Queue(),
    done: function(cb) {
      if (!this.error) {
        this.queue.add(cb);
      }
      return this;
    },
    fail: function(cb) {
      if (this.error) {
        this.queue.add(cb);
      }
      return this;
    }
  };
  
  var callback = function(error, data) {
    if(!error) {
      promise.queue.flush(data);
    } else {
      promise.queue.flush(error);
    }
  };

  fn(callback);

  return promise;
}