// function readFile(filename) {
//     const reader = new FileReader();
//     reader.addEventListener('load', (event) => {
//         img.src = event.target.result;
//     });
//     reader.readAsText(filename);

//     const questBody = document.getElementById('questMap');
//         reader.onload=function(){ 
//             quest = document.createElement('li');
//             text = document.createTextNode("quest:" + fr);
//             quest.appendChild(text);
//             questBody.appendChild(quest);
//         } 
// }

// function readLocalCsv(filename) {
//     var file = new File(["foo"], filename, {
//         type: "text/plain",
//     });
//     var reader = new FileReader();
//     reader.onload = function () {
//         document.getElementById('out').innerHTML = reader.result;
//         console.log(reader.result);
//     };
//     // start reading the file. When it is done, calls the onload event defined above.
//     reader.readAsText(filename);
//     // console.log(reader.result);
// }

// /*
//   fetch("./EFT_quests.csv")
//     .then(function(res) {
//         out = document.getElementById("out");
//         return res.text();
//     }).then(function (data) {
//         console.log(data)
//     }) */

// function updateQuestMap(quests) {
//     const questBody = document.getElementById('questMap');

//     var i;
//     for (i = 0; i < 5; i++) {
//         quest = document.createElement('li');
//         text = document.createTextNode("quest:" + i);
//         quest.appendChild(text);
//         questBody.appendChild(quest);
//     }
// }

// var quests;
// window.onload = (event) => {
//     // alert("hello");
//     // readLocalCsv("EFT_quests.csv");
// }


const input = document.querySelector('input[type=file]')
input.addEventListener('change', function(e) {
    console.log(input.files);
    const reader = new FileReader();
    reader.onload = function () {
        // console.log(reader.result);
        const lines = reader.result.split('\n').map(function (line) {
            return line.split(',');
        })
        console.log(lines[0]);
        displayQuests(lines);
    }
    reader.readAsText(input.files[0]);
}, false)

function displayQuests(quests) {
    const questBody = document.getElementById('questMap');
    quests.forEach(questName => {
        if (questName[0] == "QuestName") return;
       
        quest_div = document.createElement('div');
        quest_div.id = "quest_" + questName[0];
        quest_chkbox = document.createElement('input');
        quest_chkbox.setAttribute("type", "checkbox");
        quest_chkbox.id = questName[0];
        label = document.createElement("label");
        label.setAttribute("class", "quest");
        label.id = "label_" + questName[0];
        label.innerHTML = questName[0];
        quest_chkbox.onclick = function() { questOnClick('quest_' + questName[0]); };
        //quest_chkbox.appendChild(label);

        if (questName[2] == 'Y') {
            quest_chkbox.setAttribute("checked", true);
            quest_div.setAttribute("class", "questCompleted");
        } else {
            quest_div.setAttribute("class", "questNotComplete");
        }

        quest_div.appendChild(label);
        quest_div.appendChild(quest_chkbox);
        questBody.appendChild(quest_div);
    });
}

function questOnClick(divid) {
    questDiv = document.getElementById(divid);
    if (typeof questDiv == undefined || questDiv === null) { 
      console.log("not register click -> questDiv:" + questDiv); 
      return;
    }
    console.log("quest onclick.. " + divid);
    if (questDiv.getAttribute("class") === "questCompleted") {
        questDiv.setAttribute("class", "questNotComplete"); 
    } else
        questDiv.setAttribute("class", "questCompleted");
}


function visualizeGraph(quests) {
    var adjList;
    quests.forEach((questName, priorQuest) => {
        adjList.append([priorQuest, quest]);
    });

    var graph = {};
    rootQuest = {quest:'Debut'};
    graph.append(rootQuest);
    adjList.forEach()
}
