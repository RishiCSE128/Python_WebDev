function hello_world(){
    var name = document.getElementById("tb_1_name");
    var result = document.getElementById("lab_1_result");
    console.log("Hello "+name.value)
    result.innerHTML = "Hello "+ name.value; 
}