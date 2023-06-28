const form = document.querySelector('.quiz-form');
const userScore = document.querySelector(".score");
const result = document.querySelector(".result");

const correctAnswer = [ "B" , "A" ,"B" , "A" , "B"];

form.addEventListener('submit' , (e) => {
    let score = 0;
    e.preventDefault();
    let userAnswer = [
        e.target.q1.value,
        e.target.q2.value,
        e.target.q3.value,
        e.target.q4.value,
        e.target.q5.value,
    ];
    for(let i=0 ; i<userAnswer.length ; i++ ){
        if(userAnswer[i] === correctAnswer[i]){
            score += 20 
        }
    }
    scrollTo(0,0);
   
    
    result.classList.remove('d-none');
    let i = 0 ;
   let timer =setInterval(() => {
    userScore.textContent = i + '%'
    if(i === score){
        clearInterval(timer)
    }
    else{
        i++
    }
   },20)
    
})