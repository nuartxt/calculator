console.log("hello world");
let btn = document.querySelectorAll(".btn");
let display = document.querySelector(".display_inpute");

let num_1 = "";
let did = "";
let num_2 = "";
let result = 0;

btn.forEach(n => {
    n.addEventListener("click", () => {
        let arr = ["*", "/", "+", "-", "="];
        if (did == "" && !arr.includes(n.textContent)) {
            num_1 = num_1 + n.textContent;
            console.log("num_1:" + num_1);
            display.textContent = num_1;
        } else if (did == "" && arr.includes(n.textContent)) {
            did = did + n.textContent;
            console.log("did:" + did);
            display.textContent = did;
        }
        else if (!did == "" && !arr.includes(n.textContent)) {
            num_2 = num_2 + n.textContent;
            console.log("num_2:" + num_2);
            display.textContent = num_2;
        }

        if (n.textContent == "=") {
            switch (did) {
                case "+":
                    result = Number(num_1) + Number(num_2)
                    display.textContent = result;
                    break;
                case "-":
                    result = Number(num_1) - Number(num_2)
                    display.textContent = result;
                    break;
                case "*":
                    result = Number(num_1) * Number(num_2)
                    display.textContent = result;
                    break;
                case "/":
                    result = Number(num_1) / Number(num_2)
                    display.textContent = result;
                    break;
                default:
                    break;
            }
        }

    })
})
// console.log(num_2);