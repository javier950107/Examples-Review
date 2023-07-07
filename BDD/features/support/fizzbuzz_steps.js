const assert = require('assert')
const { When, Then, Given } = require('@cucumber/cucumber')
const data = require('../../src')

//precondition
Given("We have numbers 1 to 100", ()=>{
  // create number 1 to 100
})

When("{string} is multiple of 3", (number)=>{
    this.testFizzBuzz = data.fizzBuzz(number)
})

Then("Show the word of multiple 3 {string}", (msg)=>{
    assert.equal(this.testFizzBuzz, msg)
})

When("{string} is multiple of 5", (number)=>{
  this.testFizzBuzz = data.fizzBuzz(number)
})

Then("Show the word of multiple 5 {string}", (msg)=>{
  assert.equal(this.testFizzBuzz, msg)
})

When("{string} is multiple of 3 and 5", (number)=>{
  this.testFizzBuzz = data.fizzBuzz(number)
})

Then("Show the word of multiple of 3 and 5 {string}", (msg)=>{
  assert.equal(this.testFizzBuzz, msg)
})

When("{string} is not multiple 3 or 5",(number)=>{
  this.testFizzBuzz = data.fizzBuzz(number)
})

Then("Show nothin {string}", (msg)=>{
  assert.equal(this.testFizzBuzz, msg)
})




