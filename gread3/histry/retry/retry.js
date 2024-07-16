
let miss_num = [];
miss_num = JSON.parse(localStorage.getItem("miss_histy"))
let quiz = document.getElementById("h2");
let quizCnt = 0;
let correct = 0;
let result_b = "";
let result = [];

document.getElementById("result").style.display = "none";
document.getElementById("feedback").style.display = "none";


function quizSet(){
    quiz.textContent = question[miss_num[quizCnt]][0];
}

quizSet();
console.log(quizCnt);

function answerCheck(ans) {
    if(ans == question[miss_num[quizCnt]][1]){
        alert("正解！");
        correct++
        result_b = "問題:" + question[quizCnt][0] + "  回答:" + ans + "  正解:" + question[quizCnt][1] +   "   正解🔴";
        result.push(result_b);
    } else{
        alert("不正解、、");
        result_b = "問題:" + question[quizCnt][0] + "  回答:" + ans + "  正解:" + question[quizCnt][1] + "    不正解🔵";
        result.push(result_b);
    }
    quizCnt++
    if(quizCnt == miss_num.length){

        quiz.textContent = `${miss_num.length}問中、${correct}問正解でした!`

        document.getElementById("form").style.display = "none";
        document.getElementById("result").style.display = "";
        document.getElementById("feedback").style.display = "";

        result.forEach(result_1 => {
            if(result_1){
                result_text = result_1;
            }

            const li = document.createElement("li");
            li.innerText = result_text;
            li.classList.add("list-group-item");
            ul.appendChild(li);
            console.log(result);
        })
    }
    quizSet();
}

function answerInput(){
    let ansText ="";
    ansText = input.value;
    answerCheck(ansText);
    input.value = "";
}

form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(input.value);
    answerInput();
})



// console.log(miss_num);

// console.log(miss_num[1]);

// console.log(question[0][miss_num[1]])

// console.log("hello");





