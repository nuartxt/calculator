let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".display_inpute");
let entered_num = document.querySelector(".entered_num");

let num_1 = "";
let did = "";
let num_2 = "";
let result = 0;


btn.forEach(n => {
    n.addEventListener("click", () => {
        let actions = ["*", "/", "+", "-"];
        if (specialBtn(n)) {
            return;
        } else {
            catchingBtn(n, actions);
        }
        // entered_num.textContent = enteredNum();
    })
})


/**/
function specialBtn(btn) {
    if (btn.textContent == "DEL") {
        let new_num = "";
        if (display.textContent == num_1) {
            new_num = num_1.slice(0, -1);
            num_1 = new_num;
            (num_1.length > 0) ? display.textContent = num_1 : display.textContent = 0;
        } else if (display.textContent == num_2) {
            new_num = num_2.slice(0, -1);
            num_2 = new_num;
            (num_2.length > 0) ? display.textContent = num_2 : display.textContent = 0;
            entered_num.style.display = "block";
            entered_num.textContent = enteredNum();
        }
    } else if (btn.textContent == "C") {
        entered_num.textContent = "";
        entered_num.style.display = "none";
        num_1 = "";
        num_2 = "";
        did = "";

        display.textContent = 0;
        return true;
    } else if (btn.textContent == "=") {
        calculation(did);
        // if(btn.textContent )
        num_1 = result;
        num_2 = "";
        did = "";
        return true;
    }
    else {
        return false;
    }
}


/**/
function catchingBtn(btn, array) {
    if (did == "" && !array.includes(btn.textContent) && btn.textContent !== "DEL") {
        num_1 = num_1 + btn.textContent;
        console.log("num_1:" + num_1);
        display.textContent = num_1;
    } else if (did == "" && array.includes(btn.textContent) && btn.textContent !== "DEL") {
        did = did + btn.textContent;
        console.log("did:" + did);
        entered_num.style.display = "block";
        entered_num.textContent = enteredNum();
    }
    else if (did !== "" && !array.includes(btn.textContent) && btn.textContent !== "DEL") {
        num_2 = num_2 + btn.textContent;
        console.log("num_2:" + num_2);
        display.textContent = num_2;
        entered_num.style.display = "block";
        entered_num.textContent = enteredNum() + " =";
    } else if (did !== "" && array.includes(btn.textContent) && btn.textContent !== "DEL") {
        calculation(did);
        num_1 = result;
        num_2 = "";
        did = btn.textContent;
        display.textContent = result;

        entered_num.style.display = "block";
        entered_num.textContent = enteredNum();
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

function enteredNum() {
    let entered_display = "";
    if (num_1 !== "") {
        entered_display += num_1;
    } if (did !== "") {
        entered_display += did;
    } if (num_2 !== "") {
        entered_display += num_2;
    }
    return entered_display;
}

