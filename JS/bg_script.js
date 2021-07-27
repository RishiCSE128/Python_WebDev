function hello_world(){
    /*
    this is a hello world program that takes a name as input 
    and returns it after appending to "hello"
    */
    var name = document.getElementById("tb_1_name");
    var result = document.getElementById("lab_1_result");
    console.log("Hello "+name.value) // prints on console 
    result.innerHTML = "Hello "+ name.value; 
}