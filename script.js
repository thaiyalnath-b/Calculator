let output = document.getElementById('display');
let input = document.querySelectorAll('button');
let currentInput = '';
let lastPress = false;

input.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const value = btn.textContent;

        if(value === 'C'){
            currentInput = '';
            output.value = '';
            lastPress = false;
        }
        else if(value === 'X'){
            currentInput = currentInput.slice(0, -1);
            output.value = currentInput;
        }
        else if(value === '='){
            try {
                let expression = currentInput.replace(/\^/g, '**');
                expression = expression.replace(/(\d+\.?\d*)%(\d+\.?\d*)/g, '($1/100*$2)');
                currentInput = new Function('return ' + expression)().toString();
                output.value = currentInput;
                lastPress = true;
            }
            catch(error){
                currentInput = '';
                output.value = '';
                lastPress = false;
            }
        }
        else{
            if(lastPress && /\d/.test(value)){
                currentInput = value;
            }
            else{
                currentInput += value;
            }
            output.value = currentInput;
            lastPress = false;
        }
    });
});








