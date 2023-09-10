const closeBtn=document.querySelector(".close-btn");
const checkResultBtn=document.querySelector(".check-btn");
let resultType=document.querySelector(".result-type");
let resultContent=document.querySelector(".result-content");
let imageSrc=document.getElementById("shown-img");
let videoContent=document.querySelector("#video-s");
let videoURL="./videos/"
const defaultPath="./Images/contents/";
let person1Name=document.getElementById("Person1name");
let person2Name=document.getElementById("Person2name");

checkResultBtn.addEventListener("click",(e)=>{
    let person1NameValue=person1Name.value;
    let person2NameValue=person2Name.value;
    if (person1NameValue !== "" && person2NameValue !== "" ) {
        let name1 = person1NameValue;
        let name2 = person2NameValue;
        let loopingName=person1NameValue.toLowerCase().replace(/\s/g, '');
        name1=name1.toLowerCase().replace(/\s/g, '');
        name2=name2.toLowerCase().replace(/\s/g, '');
        for (let i = 0; i < loopingName.length; i++) {
            console.log(i);
            console.log(loopingName[i]);
            if (name2.includes(loopingName[i])) {
                name2 = name2.replace(loopingName[i], "");
                name1 = name1.replace(loopingName[i], "");
            }
        }

        let finalNameLength = name1.length + name2.length;

        let flames = ["f", "l", "a", "m", "e", "s"];

        while (flames.length > 1) {
            let formula = finalNameLength % flames.length - 1;

            if (formula >= 0) {
                let left = flames.slice(formula + 1);
                let right = flames.slice(0, formula);
                flames = left.concat(right);
            } else if (formula < 0) {
                flames.pop();
            } else {
                flames.splice(formula, 1);
            }
        }
        let resultString=flames.join();
        switch (resultString) {
            case ("f"):
                resultType.textContent="Friends";
                resultContent.textContent="Friendship is the only cement that will ever hold the world together."
                imageSrc.setAttribute("src",`${defaultPath}friends.png`);
                videoContent.setAttribute("src",`${videoURL}friends.mp4`);
                break;
            case ("l"):
                resultType.textContent="Love";
                resultContent.textContent="Love is an endless act of forgiveness. Forgiveness is the key to action and freedom."
                imageSrc.setAttribute("src",`${defaultPath}love.png`);
                videoContent.setAttribute("src",`${videoURL}love.mp4`);
                break;
            case ("a"):
                resultType.textContent="Affection";
                resultContent.textContent="Affection is responsible for nine-tenths of whatever solid and durable happiness there is in our lives."
                imageSrc.setAttribute("src",`${defaultPath}affection.png`);
                videoContent.setAttribute("src",`${videoURL}affection.mp4`);
                break;
            case ("m"):
                resultType.textContent="Marriage";
                resultContent.textContent="A successful marriage requires falling in love many times, always with the same person."
                imageSrc.setAttribute("src",`${defaultPath}marriage.png`);
                videoContent.setAttribute("src",`${videoURL}marriage.mp4`);

                break;
            case ("e"):
                resultType.textContent="Enemy";
                resultContent.textContent="You have enemies? Good. That means you've stood up for something, sometime in your life."
                imageSrc.setAttribute("src",`${defaultPath}enemy.png`);
                videoContent.setAttribute("src",`${videoURL}enemy.mp4`);
                break;
            case ("s"):
                resultType.textContent="Siblings";
                resultContent.textContent="Siblings are the people we practice on, the people who teach us about fairness and cooperation and kindness and caring, quite often the hard way."
                imageSrc.setAttribute("src",`${defaultPath}siblings.png`);
                videoContent.setAttribute("src",`${videoURL}siblings.mp4`);
                break;
            default:
                alert("Please check with Developer");

        }
        document.body.classList.toggle("show");
        e.preventDefault();
    }
    else {
        alert("please fill all the details");
    }
    
    
})

closeBtn.addEventListener("click",() =>{
    document.body.classList.toggle("show");
})

