const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let tyran;
  let tricer;
  let spinos;
  

  beforeEach(function () {
    park = new Park ("Jurassic Park", 100, []);
    tyran = new Dinosaur("Tyrannosaurus", "vegan", 10);
    tricer = new Dinosaur("Triceratops", "meet", 25);
    spinos = new Dinosaur("Spinosaurus", "vegetarian", 15);




  })

  it('should have a name', function(){
    assert.deepStrictEqual(park.name, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    assert.deepStrictEqual(100, park.ticket)
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual([], park.collection)
  });

  it('should be able to add a dinosaur to its collection', function(){
    assert.deepStrictEqual([], park.collection)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    assert.deepStrictEqual([], park.collection)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
