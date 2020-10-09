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
    quests.forEach(element => {
        questLi = document.createElement('li');
        text = document.createTextNode(element);
        questLi.appendChild(text);
        questBody.appendChild(questLi);
    });
}