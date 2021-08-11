
const options = document.querySelectorAll('.form-check');
const inputs = document.querySelectorAll('.form-check-input');
for(let i=0;i<options.length;++i){
    options[i].addEventListener('click',function(){
        inputs[i].checked = true;
    })
}
console.log(input.length)


function marking(answers){

    console.log(inputs.length)
    let score = 0;
    let ind = 0;
    let newIndex = 0;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].checked){
            if(inputs[i].value==answers[ind]){
                inputs[i].parentNode.classList.add("right-option-bg");
                ++score;
            }
            else{
                inputs[i].parentNode.classList.add("wrong-option-bg");
            }
            ++ind;
        }
        else{

            if(inputs[i].value==answers[newIndex]){
                inputs[i].parentNode.classList.add("right-option-bg");
            }
            else{
                inputs[i].parentNode.classList.add("wrong-option-bg");
            }
            ++newIndex;

        }
    }
    let marks = document.getElementById('marks');
    marks.innerHTML = score+"/5";
    setTimeout(function(){
        if(score===5){
            alert("MARVELLOUS!!!");
        }
        else if(score>=3){
            alert("GOOD JOB!!!");
    
        }
        else{
            alert("Hmmm! Seems like you need some revision. Come back again and score goood!!!")
        }
    },0)

}
function pythonMcqs(){
    let answers = [1, 2, 1, 2, 1];
    marking(answers);
}

function javascriptMcqs(){
    let answers = [1, 2, 2, 2, 1];
    marking(answers);
}

function cppMcqs(){
    let answers = [2, 1, 1, 1, 2];
    marking(answers);
}

function clearMarked(){
    for(let i=0;i<inputs.length;++i){
        inputs[i].checked=false;
        inputs[i].parentNode.classList.remove("right-option-bg");
        inputs[i].parentNode.classList.remove("wrong-option-bg");

    }

}