// ==============================
// LUNG ADVENTURE
// ==============================

let currentLevel = 1;

const challenges = [

{
title:"🚶 Walk for 30 minutes",
info:"Walking helps loosen mucus inside the lungs, making breathing easier for people with Cystic Fibrosis."
},

{
title:"💧 Drink plenty of water",
info:"Water helps keep mucus thinner, making it easier to clear from the lungs."
},

{
title:"🍎 Eat 5 portions of fruit and vegetables",
info:"A healthy diet helps the body fight infections and keeps the lungs healthier."
},

{
title:"🫁 Practise deep breathing for 5 minutes",
info:"Deep breathing helps expand the lungs and improve airflow."
},

{
title:"🧼 Wash your hands properly",
info:"Good hygiene reduces the chance of chest infections."
},

{
title:"🧘 Stretch for 10 minutes",
info:"Stretching improves posture and makes breathing easier."
},

{
title:"🏃 Complete 20 squats",
info:"Exercise strengthens your body and supports lung health."
},

{
title:"😴 Get at least 8 hours of sleep",
info:"Sleep helps your body recover and stay healthy."
},

{
title:"❤️ Tell someone one fact about Cystic Fibrosis",
info:"Sharing knowledge helps raise awareness of the condition."
},

{
title:"🏆 Healthy Lungs Champion!",
info:"Congratulations! You completed every healthy challenge!"
}

];

const popup = document.getElementById("challengePopup");
const title = document.getElementById("challengeTitle");
const info = document.getElementById("challengeInfo");

const completeButton = document.getElementById("completeChallenge");
const closeButton = document.getElementById("closePopup");

let selectedButton = null;

for(let i=1;i<=10;i++){

    const button=document.getElementById("alveolus"+i);

    button.onclick=function(){

        if(!button.classList.contains("unlocked")){

            return;

        }

        selectedButton=i;

        title.innerHTML=challenges[i-1].title;

        info.innerHTML=challenges[i-1].info;

        popup.style.display="flex";

    };

}

closeButton.onclick=function(){

    popup.style.display="none";

};

completeButton.onclick=function(){

    popup.style.display="none";

    if(selectedButton<10){

        const next=document.getElementById("alveolus"+(selectedButton+1));

        next.classList.remove("locked");

        next.classList.add("unlocked");

        next.classList.add("newUnlock");

        if(selectedButton + 1 == 10){

    next.innerHTML="🏆";

}
else{

    next.innerHTML="✔";

}

        setTimeout(function(){

        next.classList.remove("newUnlock");

},700);

    }

    document.querySelector(".progress-fill").style.width=(selectedButton*10)+"%";

    document.querySelector(".progress-text").innerHTML=
    selectedButton+" / 10 Alveoli Unlocked";

    if(selectedButton===10){

        setTimeout(function(){

            title.innerHTML="🏆 Healthy Lungs Champion!";

            info.innerHTML="You completed every healthy challenge and unlocked the entire lung!";

            completeButton.style.display="none";

            popup.style.display="flex";

        },300);

    }

};

