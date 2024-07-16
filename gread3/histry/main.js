
let quiz = document.getElementById("question");
let num = question.length
let previous_score = localStorage.getItem("score");
let miss = [];
let result = [];
let result_b = "";

document.getElementById("result").style.display = "none";
document.getElementById("retry").style.display = "none";



console.log(num);

let correct = 0;
let quizCnt = 0;

function quizSet() {
    quiz.textContent = question[quizCnt][0];
}

quizSet();

function ansPercent(input_correct,input_quiz_num) {
    let before_percent = input_correct / input_quiz_num * 100
    percent = Math.round(before_percent);
    return percent;
}

function ansEvaluation(input_previous_score,input_score){
    let before_evaluation = input_score - input_previous_score
    let evaluation = Math.abs(before_evaluation);
    return evaluation;
}

function answerCheck(ans) {
    if(ans == question[quizCnt][1]){
        alert("正解！！");
        correct++
        result_b = "問題:" + question[quizCnt][0] + "  回答:" + ans + "  正解:" + question[quizCnt][1] +   "   正解🔴";
        result.push(result_b);
    } else{
        alert("不正解、、、");
        miss.push(quizCnt);
        result_b = "問題:" + question[quizCnt][0] + "  回答:" + ans + "  正解:" + question[quizCnt][1] + "    不正解🔵";
        result.push(result_b);

    }
    quizCnt++
    console.log(`よくできました${quizCnt}問目完了`);
    if(quizCnt == question.length){

        if(previous_score > 0){
            h5.innerText = `前回の正解率${previous_score}%`;
        }else{
            h5.innerText = "次回から今回の正解率が表示されます"
        }


        localStorage.removeItem("score");

        let ans_percent = ansPercent(correct,num);

        localStorage.setItem("score",ans_percent);

        document.getElementById("form").style.display = "none";
        
        let ansEvaluation_let = ansEvaluation(previous_score,ans_percent);

        console.log(ansEvaluation_let);

        if(ans_percent > previous_score){
            h6.innerText = `前回より${ansEvaluation_let}点アップ！！`
        }else if(ans_percent == previous_score){
            h6.innerText = "前回と同じ点数です"
        }else{
            h6.innerText = `前回より${ansEvaluation_let}点ダウン、、`
        }

        h1.innerText = "正解率" + ans_percent + "%";

        quiz.textContent = `${num}問中、${correct}問正解でした！`


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
        


        console.log(miss);
        localStorage.setItem("miss_histy",JSON.stringify(miss));

        document.getElementById("retry").style.display = "";
        document.getElementById("result").style.display = "";
    } else{
        quizSet();
    }
}


form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log(input.value);
    answerInput();
})

function answerInput(){
    let ansText = "";
    ansText = input.value;
    answerCheck(ansText);
    input.value = "";
}

