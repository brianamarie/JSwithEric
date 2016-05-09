describe("About Javascript Primitives", function() {

//Ready? This test is mostly here just to hide all of the others before answers are revealed.
//Flip the answer to "YES!"  

  var ready = "no";

//What are the 6 types of Javascript Primitives?
  
  var primitiveArray = ['FILL_ME_IN', 'FILL_ME_IN', 'FILL_ME_IN', 'FILL_ME_IN', 'FILL_ME_IN', 'FILL_ME_IN'];

//Below, fill in any example of each type of primitive/JS item
  var number = FILL_ME_IN;

//Typo Is On Purpose :D
  var booleanItem = FILL_ME_IN;

  var string = 450;

//This one is tricky! Think about what I mentioned before.
  var undefinedItem = FILL_ME_IN;

  var nullItem = FILL_ME_IN;

  var object = FILL_ME_IN;

  var array = FILL_ME_IN;


//Below, declare a function called "Sum". It should take 2 parameters, and return their added value.

    //Your code here. 



//If you are completely unfamiliar with Arrays, and new to JS, and want to learn more before continuing..
//In the HTML doc, click "Look Ahead". Scroll to the Bottom of the HTML to find tests. 
//Open "About Arrays" in browser. Complete About Arrays. Otherwise, move on to IntroFunctions.
//Change the below to "I did read this" to pass the test.
var acknowledgment = "I did not read this."


/////////////////////////////////////////////////////////////////////////////////////////////////////
//Tests
  it("Should be Ready", function() {
    expect(ready).toEqual("YES!");
  });


  it("What are the 6 types of Javascript Primitives?", function() {
    var answerArray = ["number", "string", "object", "boolean", "undefined", "null"]
    expect(answerArray.sort()).toEqual(primitiveArray.sort());
  });

  it("Should Know What A Number Is", function() {
    expect(typeof(number)).toEqual("number");
  });

  it("Should Know What A Boolean Is", function() {
    expect(typeof(booleanItem)).toEqual("boolean");
  });

  it("Should Know What A String Is", function() {
    expect(typeof(string)).toEqual("string");
  });

  it("Should Know What Undefined Is", function() {
    expect(typeof(undefinedItem)).toEqual("undefined");
  });

  it("Should Know What an Object Is", function() {
    expect(typeof(object)).toEqual("object");
  });

  it("Should Know What An Array Is", function() {
    expect(Array.isArray(array)).toEqual(true);
  });

   it("Should Know How To Write a Function", function() {
    expect(sum(1, 2)).toBe(3);
  });

  it("Acknowledge That There is Extra Content on Arrays if this is all new to you", function() {
    expect(acknowledgment).toBe("I did read this.");
  });

});