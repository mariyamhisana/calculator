let displayvalue=(num)=>result.value+=num
// function displayvalue(num){
//     let txt_box=document.querySelector("#result")
//     txt_box.value+=num
// }
let clear_box=()=>result.value=""
let evaluate_exp=()=>result.value=eval(result.value)
let remove_element=()=>result.value=result.value.slice(0,-1)
