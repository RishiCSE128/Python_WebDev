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

function calculator(){
    var num1 = parseInt(document.getElementById("tb_2_num1").value);
    var num2 = parseInt(document.getElementById("tb_2_num2").value);
    var choice = document.querySelector('input[name= rb_2_choice]:checked').value;
    var result = document.getElementById("lab_2_result")
    switch(choice){
        case "add" : result.innerHTML = "Result = " + (num1 + num2); break;
        case "sub" : result.innerHTML = "Result = " + (num1 - num2); break;
        case "mul" : result.innerHTML = "Result = " + (num1 * num2); break;
        case "div" : result.innerHTML = "Result = " + (num1 / num2); break;
        case "mod" : result.innerHTML = "Result = " + (num1 % num2); break;
        case "exp" : result.innerHTML = "Result = " + (num1 ** num2); break;
        default: result.innerHTML = "Invalid appliation selected... "
    }
}

function stringHandling(){
    var str = document.getElementById("tb_3_str").value;
    var result = document.getElementById("lab_3_result");   
    console.log(str);
    var x = String.raw`${str}`;
    console.log(x);
} 

var item_list = [];
function array(choice){  // passing value from the HTML
    console.log(choice)
    var item = document.getElementById("tb_4_input").value;
    var result = document.getElementById("ol_4_result");

   if(item != ""){

       switch(choice){
            case "push": item_list.push(item); break;
            case "unshift": item_list.unshift(item); break;
            case "pop": x = item_list.pop(); 
                       alert(x + "is removed");
                       break;
            case "shift": x = item_list.shift(); 
                          alert(x + "is removed");
                          break;
            case "splice_name" : idx = item_list.indexOf(item);
                                 item_list.splice(idx);
                                 break; 
            case "splice": item_list.splice(parseInt(item)-1);
                           break;

       }
    } 


    else alert("Envalid entry... ")
        
   temp="";
   item_list.forEach(elem => {
        console.log(elem);
        temp+="<li>"+elem+"</li>";
   });
   result.innerHTML=temp;
}
