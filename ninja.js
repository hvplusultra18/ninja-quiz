const correctAnswers=['B','B','B','B']; 
const form=document.querySelector('.quiz-form');
const result=document.querySelector(".result");
const sc=document.querySelector('span')
form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;
    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    //check answers
    userAnswers.forEach((answer,index)=>{
if(answer===correctAnswers[index]){
    score+=25;
}
    });
        // console.log(score);
        scrollTo(0,0);
        
        result.classList.remove('d-none');
        // alert(`you are ${score}% ninja`);
        let i=0;
        const timer=setInterval(() => {
            
            sc.textContent=`${i}%`;
            
            if(i===score){
                clearInterval(timer);
            }
            i++;
        }, 15);

})