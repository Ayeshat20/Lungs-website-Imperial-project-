// Number of unlocked alveoli
let unlocked = 1;

// Cystic Fibrosis healthy challenges
const challenges = [

    "Walk for 30 minutes today 🚶",

    "Drink plenty of water today 💧",

    "Eat 5 portions of fruit and vegetables 🍎",

    "Do 20 squats 💪",

    "Practise deep breathing for 5 minutes 🫁",

    "Wash your hands properly 🧼",

    "Stretch for 10 minutes 🧘",

    "Go for a short bike ride 🚴",

    "Sleep for at least 8 hours 😴",

    "Amazing! You've completed the Lung Adventure! 🏆"

];

// Add click event to every alveolus

for(let i = 1; i <= 10; i++){

    const button = document.getElementById("alveolus" + i);

    button.addEventListener("click", function(){

        if(i > unlocked){

            alert("🔒 Complete the previous alveolus first!");

            return;

        }

        let message = challenges[i-1];

        if(confirm(message + "\n\nPress OK once you've completed this challenge.")){

            if(unlocked < 10){

                unlocked++;

                document.getElementById("alveolus"+unlocked).classList.remove("locked");

                document.getElementById("alveolus"+unlocked).classList.add("unlocked");

                document.getElementById("alveolus"+unlocked).innerHTML="●";

            }

            // Update progress bar

            let percent = unlocked*10;

            document.querySelector(".progress-fill").style.width = percent + "%";

            document.querySelector(".progress-text").innerHTML =
            unlocked + " / 10 Alveoli Unlocked";

            if(unlocked==10){

                alert("🎉 Congratulations! You unlocked the whole lung!");

            }

        }

    });

}
