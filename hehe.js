const question = [{
    'que' : 'which of the following is markup language',
    'a':'html',
    'b':'css',
    'c':'javascript',
    'd':'none',
    'correct':'a'
},
{
    'que' : 'which of the following is markup ',
    'a':'html',
    'b':'css',
    'c':'javascript',
    'd':'none',
    'correct':'a'
},
{
    'que' : 'which of the following is markup language',
    'a':'html',
    'b':'css',
    'c':'javascript',
    'd':'none',
    'correct':'a'
},
{
    'que' : 'which of the following is markup language',
    'a':'html',
    'b':'css',
    'c':'javascript',
    'd':'none',
    'correct':'a'
}]

    let index = 0;
    let right = 0;
    let wrong = 0;
    let total = question.length;
    const element = document.getElementsByClassName("question");
    const option = document.querySelectorAll('.options');
    const reset =()=>{
        option.forEach(
            (input)=>{
                input.checked = false;
            }
        )
    }

const fun = ()=>{
    if(index === total){
        return end();
    }
    reset();
    const ques = question[index];
    
    element[0].textContent = `${index+1}) ${ques.que}`;
    option[0].nextElementSibling.innerText = ques.a;
    option[1].nextElementSibling.innerText = ques.b;
    option[2].nextElementSibling.innerText = ques.c;
    option[3].nextElementSibling.innerText = ques.d;

    // for(let i = 0 ; i < 4 ; i++){
    //     option[i].textContent = 
    // }
    
}
fun();
const handleclick = ()=>{
    const ques = question[index];
    const ans = getAns();
    if(ans == ques.correct){
        right++;
        console.log(right);
    }else{
        wrong++;
        console.log(wrong)
    }
    index++;
    fun();
}
const getAns = ()=>{
    let answer;
    option.forEach(
        (input)=>{
            if(input.checked){
                answer =  input.value;
            }
        }
    )
    return answer;
}


const end =()=>{
    const final = document.getElementsByClassName("box");
    final[0].innerHTML = `
    <h2>thankyouuu for playing <h2>
    <h4>your score : ${right} / ${total}</h4>
    `
}