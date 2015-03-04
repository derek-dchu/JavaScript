var HashMap = require("./native_hashmap"),
    assert = require('assert');

describe('test HashMap', function() {
  var hashmap;
  beforeEach(function() {
      hashmap = HashMap();
  });

  describe('test creation', function() {
    it('should create an empty hash map', function() {
      assert.equal(0, hashmap.size());
    });

    it('should be empty', function() {
      assert.equal(true, hashmap.isEmpty());
    });

    it('should have table as a private field', function() {
      assert.equal(undefined, hashmap.table);
    });
  });

  describe('test put()', function() {
    it('should put key value pairs into to the table', function() {
      hashmap.put("derek", 100);
      hashmap.put(2, 200);
      assert.equal(2, hashmap.size());
    });

    it('should treat a string and a number which have the same value as the same key', function() {
      hashmap.put(1, 100);
      hashmap.put("1", 200);
      assert.equal(1, hashmap.size());
    });
  });

  describe('test reading', function() {
    beforeEach(function() {
      hashmap.put("derek", 100);
      hashmap.put(2, 200);
    });

    it('should not share the table among other hashmaps', function() {
      var hashmap2 = HashMap();
      assert.equal(0, hashmap2.size());
    });

    it('should get a value by providing the key', function() {
      var value = hashmap.get("derek");
      assert.equal(100, value);
    });

    it('should return the key set', function() {
      var keySet = hashmap.keySet();
      assert.deepEqual(["2", "derek"], keySet);
    });

    it('should return the entry set', function() {
      var entrySet = hashmap.entrySet();
      assert.deepEqual([["2", 200], ["derek", 100]], entrySet);
    });

    it('should check whether it contains the key', function() {
      assert.equal(true, hashmap.containsKey("derek"));
      assert.equal(false, hashmap.containsKey("none"));
    });

    it('should check whether it contains the value', function() {
      assert.equal(true, hashmap.containsValue(100));
      assert.equal(false, hashmap.containsValue(0));
    });
  });

  describe('test deletion', function() {
    beforeEach(function() {
      hashmap.put("derek", 100);
    });

    it ('should remove the entry', function() {
      assert.equal(true, hashmap.remove("derek"));
      assert.equal(0, hashmap.size());
      assert.equal(null, hashmap.get("derek"));
    });

    it('should clear the table', function() {
      assert.equal(true, hashmap.clear());
      assert.equal(0, hashmap.size());
      assert.equal(null, hashmap.get("derek"));
    });
  });
});
