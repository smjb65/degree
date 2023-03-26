
let input = document.getElementById("input")
let inputnum = Number(document.getElementById("input"))
let convert = document.getElementById("convert")
let change = document.getElementById("change")
let h1 = document.getElementById("h1")
let title = document.getElementById("title")
let placeholder = input.getAttribute("placeholder")

change.addEventListener("click", changefunc)
function changefunc() {
    let placeholder = input.getAttribute("placeholder")
    if (placeholder === "  ...℃") {
         input.setAttribute("placeholder","  ...℉")
         h1.innerText= "convert ℉ to ℃"
        title.innerText = "convert ℉ to ℃"

    } else if(placeholder === "  ...℉"){
        input.setAttribute("placeholder","  ...℃")
        h1.innerText= "convert ℃ to ℉"
        title.innerText = "convert ℃ to ℉"
    }
}

convert.addEventListener("click",convertfunc)
function convertfunc() {
    // console.log(input.value)
    if(input.value == ""){
        0==0
    } else {

    let placeholder = input.getAttribute("placeholder")
    if (placeholder === "  ...℃") {
        console.log(input.value)
        input.value = (Math.round((Number(input.value)*1.8 + 32)*1000000))/1000000
    } else if(placeholder === "  ...℉") {
        taghsim =   Number(input.value) -32
        input.value = (Math.round((taghsim/1.8)*1000000))/1000000
    }
}
}

reset.addEventListener("click", resetfunc)
function resetfunc() {
    input.value = ""
}




