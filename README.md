# Python_WebDev
Contains code samples for the python based web-developed training 

## Java Script Tutorial

### Introduction to DOM
The Document object model (DOM) is a tree data structure that a browser maintains to organise all the HTML elemens that it renders. The three object is called __document__ and it is shared with any script that is linked with the subjected HTML file. 
In practice JS runs mostly as a backend of an web application, therefore in this course we'll use HTML as a front-end to feed data into JS. The HTML form element will host as the standard I/O for the JS. the process to link the HTML with JS is as follows. 
1. add the `<scritp src=FILENAME.js></script>` at the HTML head to point the back-end script. 
2. Set action for a buton using <input type="button" id="BTN_1" onclick="JS_FUNCTION()"> to point the function that would be invoked when the browser detects a click event on a button with a given ID. 
3. Create a JS file of name that was provided as source in the HTML, inside it create a function of name that was provided as on_click event action. 
4. To access HTML elements create local variables in the JS function and assign as `var x = document.getElementbyId("ELEM_ID")` this will create a pointer to the subjected element and store it to x. 

### JS Data types 
JS defines 7 diffrent data types. 
 | Type | Meaning  | 
 |--- | --- |
 | Undefined | no defined |
 | null | Set as nothing | 
 | boolean | True / False | 
 | string | any text | 
 | number | any number | 
 | symbol | unique and immutable | 
 | object | key:value pair | 

 Three ways to declare variables: 
 1. __var__ : `var NAME = VLAUE`, globally scoped 
 2. __let__ : `let NAME = VALUE`, locally scoped
 3. __cosnt__ : `const  NAME = VALUE`, fixed value  