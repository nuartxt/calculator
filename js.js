let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".display_inpute");

let num_1 = "";
let did = "";
let num_2 = "";
let result = 0;


btn.forEach(n => {
    n.addEventListener("click", () => {
        let actions = ["*", "/", "+", "-"];
        if (specialSings(n)) {
            return;
        } else {
            catchingSings(n, actions);
        }
    })
})

function specialSings(btn) {
    if (btn.textContent == "C") {
        num_1 = "";
        num_2 = "";
        did = "";
        display.textContent = 0;
        return true;
    } else if (btn.textContent == "=") {
        calculation(did);
        num_1 = result;
        num_2 = "";
        did = "";
        return true;
    } else {
        return false;
    }
}


/**/
function catchingSings(btn, array) {
    if (did == "" && !array.includes(btn.textContent)) {
        num_1 = num_1 + btn.textContent;
        console.log("num_1:" + num_1);
        display.textContent = num_1;
    } else if (did == "" && array.includes(btn.textContent)) {
        did = did + btn.textContent;
        console.log("did:" + did);
        // display.textContent = did;
    }
    else if (did !== "" && !array.includes(btn.textContent)) {
        num_2 = num_2 + btn.textContent;
        console.log("num_2:" + num_2);
        display.textContent = num_2;
    }
}

/**/
function calculation(did_action) {
    switch (did_action) {
        case "+":
            result = Number(num_1) + Number(num_2);
            console.log("result:" + result);
            display.textContent = result;
            break;
        case "-":
            result = Number(num_1) - Number(num_2);
            console.log("result:" + result);
            display.textContent = result;
            break;
        case "*":
            result = Math.round((Number(num_1) * Number(num_2)) * 100) / 100;
            console.log("result:" + result);
            display.textContent = result;
            break;
        case "/":
            if (num_2 != 0) {
                result = Math.round((Number(num_1) / Number(num_2)) * 100) / 100;
                console.log("result:" + result);
                display.textContent = result;
            } else {
                display.textContent = "Can not divide by zero";
            }
            break;
        default:
            break;
    }
};