function table(){
    let num = document.querySelector("#input_field").value;

    let text = "<table>"
    for(let i=1; i<=10; i++){
        text += "<tr>"
        text += "<td>" + num + "<td>"
        text += "<td>" + "X" + "<td>"
        text += "<td>" + i + "<td>"
        text += "<td>" + "=" + "<td>"
        text += "<td>" + parseInt(num)*i + "<td>"
    }
    text +="</table>"
    document.querySelector("#show_result").innerHTML = text;
}












// let form = document.querySelector("form");
// let input_field = document.querySelector("#input_field");


// form.addEventListener("submit", multiNumber);

// function multiNumber(){

//     let num = parseInt(input_field.value);
//     let show_result = document.querySelector("#show_result");



// }