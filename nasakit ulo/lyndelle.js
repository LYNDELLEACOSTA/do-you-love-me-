const wrapper=document.querySelector(".wrapper");
const question=document.querySelector(".question");
const yesBtn=document.querySelector(".yes-btn");
const noBtn=document.querySelector(".no-btn");

noBtn.addEventListener("mouseover", moveHover)
function moveHover(){
    const i=Math.floor(Math.random()*500)+1;
    const j=Math.floor(Math.random()*500)+1;

    noBtn.style.left=i+"px"
    noBtn.style.top=j+"px"
}
const wrapperRect=wrapper.getBoundingClientRect();

yesBtn.addEventListener("click", event=>{
    event.target.style.backgroundColor="Lightgreen";
    event.target.textContent="YESS!!!";
    question.innerHTML="I Love You Too 😘💕";
});

yesBtn.addEventListener("mouseover", event=>{
    event.target.style.backgroundColor="pink";
    event.target.textContent="That's right😙";
});

yesBtn.addEventListener("mouseout", event=>{
    event.target.style.backgroundColor="none";
    event.target.textContent="Yes";
});

noBtn.addEventListener("click", event=>{
    event.target.style.backgroundColor="tomato";
    event.target.textContent="Ouch😢";
    question.innerHTML="I've done my best.Bye!"
});

noBtn.addEventListener("mouseover", event=>{
    event.target.style.backgroundColor="pink";
    event.target.textContent="Don't pls😭";
});

noBtn.addEventListener("mouseout", event=>{
    event.target.style.backgroundColor="none";
    event.target.textContent="No";
});



