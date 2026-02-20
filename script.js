//display calc
const calcDisp=(content)=>{
result.value+=content
}

//clear display
const clearDisp=()=>{
result.value=""
}

//backspace
const backspace=()=>{
result.value=result.value.slice(0,-1)
}

//calculate result
const calcResult=()=>{
    try{
result.value=eval(result.value)
    }catch(err){
        result.value=""
result.value="Invalid Expression!!!!!!!"
    }
}