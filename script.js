let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = ''; // 1 variable create kiya string

buttonsArray.forEach(btn =>{  //arrow function
    
    

    btn.addEventListener('click',(e) => {
        
        if(e.target.innerHTML == '='){
            
            string =  eval(string);
            display.value = string;

        }else if(e.target.innerHTML == 'x²'){
            
            string = Math.pow(string, 2);
            display.value = string;
        
        }else if(e.target.innerHTML == 'AC'){
            
            string = '';
            display.value = string;

        }else if(e.target.innerHTML == 'DE'){
            
            string = string.substring(0, string.length-1);
            display.value = string;

        }else{
            string +=e.target.innerHTML; // us string ko addevent mai dala hai or string mai e.target.innerHTML ko store kiya.
            // string += use esliya kiya hai q ki pahile sirif single value display fo raha tha ab multiple value display hoga.
    
            display.value = string; // ab string ke under jo store hua hai vo ab display hoga
    
           // console.log(e.target.innerHTML) // innerHTML use kiya isliya ki html ke code ke under jo likha hai vo print hoga
        }
       

        
    });


});

