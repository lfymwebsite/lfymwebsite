let trueAnswers = new Array();
let options = new Array();

function loadQuestion(data, num) {
    const main = document.getElementById("main");
    const content = document.getElementById("content");

    // top of test home button and time remaining
    let testTop = document.createElement("div");
    testTop.setAttribute("class", "testTop");
        
        let homeButton = document.createElement("button");
        homeButton.setAttribute("class", "testTopText");
        homeButton.setAttribute("style", "float: left");
        homeButton.setAttribute("onClick", "sendHome()");   
            let homea = document.createElement("a");
            homea.setAttribute("style", "color: orangered;")
                let homeText = document.createTextNode("Home");
                homea.appendChild(homeText);
            homeButton.appendChild(homea);
        testTop.appendChild(homeButton);

        let timeRemaining = document.createElement("div");
        timeRemaining.setAttribute("class", "testTopText");
        timeRemaining.setAttribute("style", "float: right;"); 
            let timea = document.createElement("a");
            timea.setAttribute("style", "color: orangered;")
                let timeText = document.createTextNode("Time Remaining: ");
                timea.appendChild(timeText);
            timeRemaining.appendChild(timea);
        testTop.appendChild(timeRemaining);

    content.appendChild(testTop);
    
    // question
    let questionDiv = document.createElement("h2");
        let questionText = document.createTextNode("Which word is closest in meaning to:");
        questionDiv.appendChild(questionText);
    content.appendChild(questionDiv);

    let definitionDiv = document.createElement("h3");
        let definitionText = document.createTextNode(data[num]["Definition"]);
        definitionDiv.appendChild(definitionText);
    content.appendChild(definitionDiv);

    // collect multiple choice answers
    let collectedWords = collectMC(data, num);

    // multiple choice answers grid
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "grid-container");
        
        let a1 = document.createElement("button");
        let option_a1 = "option_a1";
        a1.setAttribute("class", "button");
        a1.setAttribute("id", "option_a1");
        a1.setAttribute("onclick", "answered(answers, num, option_a1)");
            let a1a = document.createElement("a");
                let a1Text = document.createTextNode(collectedWords[0]);
                a1a.appendChild(a1Text);
            a1.appendChild(a1a);
        gridContainer.appendChild(a1);

        let a2 = document.createElement("button");
        let option_a2 = "option_a2";
        a2.setAttribute("class", "button");
        a2.setAttribute("id", "option_a2");
        a2.setAttribute("onclick", "answered(answers, num, option_a2)");
            let a2a = document.createElement("a");
                let a2Text = document.createTextNode(collectedWords[1]);
                a2a.appendChild(a2Text);
            a2.appendChild(a2a);
        gridContainer.appendChild(a2);

        let a3 = document.createElement("button");
        let option_a3 = "option_a3";
        a3.setAttribute("class", "button");
        a3.setAttribute("id", "option_a3");
        a3.setAttribute("onclick", "answered(answers, num, option_a3)");
            let a3a = document.createElement("a");
                let a3Text = document.createTextNode(collectedWords[2]);
                a3a.appendChild(a3Text);
            a3.appendChild(a3a);
        gridContainer.appendChild(a3);

        let a4 = document.createElement("button");
        let option_a4 = "option_a4";
        a4.setAttribute("class", "button");
        a4.setAttribute("id", "option_a4");
        a4.setAttribute("onclick", "answered(answers, num, option_a4)");
            let a4a = document.createElement("a");
                let a4Text = document.createTextNode(collectedWords[3]);
                a4a.appendChild(a4Text);
            a4.appendChild(a4a);
        gridContainer.appendChild(a4);
    
    content.appendChild(gridContainer);
    
    // nav buttons
    let navButtons = document.createElement("div");
    navButtons.setAttribute("class", "navButton");

        // if (num != 0) {
        //     let prev = document.createElement("button");
        //     prev.setAttribute("class", "button prevNavButton");
        //     prev.setAttribute("onclick", "prev()");
        //         let prevA = document.createElement("a");
        //             let prevText = document.createTextNode("Previous");
        //             prevA.appendChild(prevText);
        //         prev.appendChild(prevA);
        //     navButtons.appendChild(prev);
        // }

        let progress = document.createElement("div");
        progress.setAttribute("class", "progress");
            let progressA = document.createElement("a");
                let progressText = document.createTextNode((num + 1) + " / " + data.length + " Questions");
                progressA.appendChild(progressText);
            progress.appendChild(progressA);
        navButtons.appendChild(progress);

        if (num < data.length - 1) {
            let next = document.createElement("button");
            next.setAttribute("class", "button nextNavButton");
            next.setAttribute("onclick", "next()");
                let nextA = document.createElement("a");
                    let nextText = document.createTextNode("Next");
                    nextA.appendChild(nextText);
                next.appendChild(nextA);
            navButtons.appendChild(next);
        } else {
            let next = document.createElement("button");
            next.setAttribute("class", "button nextNavButton");
            next.setAttribute("onclick", "finish()");
                let nextA = document.createElement("a");
                    let nextText = document.createTextNode("Finish");
                    nextA.appendChild(nextText);
                next.appendChild(nextA);
            navButtons.appendChild(next);
        }
    
    content.appendChild(navButtons);
}

function collectMC(data, num) {
    trueAnswers[num] = data[num]["Word"];
    let counter = 0;
    options[counter] = data[num]["Word"];
    counter++;

    let synonyms = 0;
    let antonyms = 0;

    while (counter < 4) {
        // if (data[num]["Synonym 1"] != "" && synonyms == 0) {
        //     options[counter] = data[num]["Synonym 1"];
        //     synonyms++;
        //     counter++;
        // }
        if (data[num]["Antonym"] != "" && antonyms == 0) {
            options[counter] = data[num]["Antonym"];
            antonyms++;
            counter++;
        } else {
            let randInt = Math.floor(Math.random() * (data.length));
            if (randInt == num) {
                randInt = Math.floor(Math.random() * (data.length));
            } else if (options[1] == data[randInt]["Word"]) {
            } else if (options[2] == data[randInt]["Word"]) {
            } else {
                let randWord = data[randInt]["Word"];
                options[counter] = randWord;
                counter++;
            }

        }
    }

    console.log(options);

    let shuffled = shuffle(options);
    return shuffled;
}

function shuffle(array) {
    let curr = array.length;
    // There remain elements to shuffle
    while (curr !== 0) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curr);
        curr -= 1;
        // Swap it with the current element.
        let tmp = array[curr];
        array[curr] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function sendHome() {
    location.href="index.html";
}

function prev() {
    let nextButton = document.getElementsByClassName("nextNavButton");
    nextButton[0].style.display = "block";

    $.getJSON("../test.json", function(data) {
        if (num > 0) {
            document.getElementById("content").innerHTML = "";
            num--;
            loadQuestion(data, num);
        }
    }); // end of getJSON
}

function next() {
    let nextButton = document.getElementsByClassName("nextNavButton");
    nextButton[0].style.display = "block";

    $.getJSON("../test.json", function(data) {
        if (num + 1 < Object.keys(data).length) {
            document.getElementById("content").innerHTML = "";
            num++;
            loadQuestion(data, num);
        }
    }); // end of getJSON
}

function finish() {
    const content = document.getElementById("content");

    $.getJSON("../test.json", function(data) {
        let qNums = [];
        for (let i = 1; i <= data.length; i++) {
            qNums.push(i);
        }

        let score = [];
        for (let i = 0; i <= data.length; i++) {
            if (answers[i] == trueAnswers[i]) {
                score[i] = 1;
            } else if (answers[i] == "") {
                score[i] = "not answered"
            } else {
                score[i] = 0;
            }
        }

        let finalScore = 0;
        for (i = 0; i < score.length - 1; i++) {
            finalScore = finalScore + score[i];
        }

        // remove everything in content
        content.innerHTML = "";

        // creating results table
        let resultsContainer = document.createElement("div");
        resultsContainer.setAttribute("class", "results-container");

            // test completion text and score
            let testCompleteTopDiv = document.createElement("h2");
            testCompleteTopDiv.setAttribute("class", "testCompleteTopDiv");
            testCompleteTopDiv.setAttribute("style", "color: orangered");
                let testCompleteTopText = document.createTextNode("You got " + finalScore + " / " + data.length + " questions correct!")
                testCompleteTopDiv.appendChild(testCompleteTopText);
            resultsContainer.appendChild(testCompleteTopDiv);

            // results table
            let resultsTable = document.createElement("table");
            resultsTable.setAttribute("class", "resultsTable");
                let titlesTR = document.createElement("tr");
                titlesTR.setAttribute("class", "tr");

                    let numTitle = document.createElement("th");
                        let numTitleText = document.createTextNode("Question");
                        numTitle.appendChild(numTitleText);
                    titlesTR.appendChild(numTitle);

                    let definitionTitle = document.createElement("th");
                        let definitionTitleText = document.createTextNode("Definition");
                        definitionTitle.appendChild(definitionTitleText);
                    titlesTR.appendChild(definitionTitle);
                    
                    let trueAnswersTitle = document.createElement("th");
                    let trueAnswersTitleText = document.createTextNode("Correct Answer");
                    trueAnswersTitle.appendChild(trueAnswersTitleText);
                    titlesTR.appendChild(trueAnswersTitle);
                    
                    let answersTitle = document.createElement("th");
                        let answersTitleText = document.createTextNode("Your Answer");
                        answersTitle.appendChild(answersTitleText);
                    titlesTR.appendChild(answersTitle);

                    let scoreTitle = document.createElement("th");
                        let scoreTitleText = document.createTextNode("Score");
                        scoreTitle.appendChild(scoreTitleText);
                    titlesTR.appendChild(scoreTitle);

                resultsTable.appendChild(titlesTR);

                for (let i = 0; i < data.length; i++) {
                    let rowTR = document.createElement("tr");
                    rowTR.setAttribute("class", "tr");
                        
                        let numTD = document.createElement("td");
                            let numText = document.createTextNode(qNums[i]);
                            numTD.appendChild(numText);
                        rowTR.appendChild(numTD);

                        let definitionTD = document.createElement("td");
                            let definitionText = document.createTextNode(data[i]["Definition"]);
                            definitionTD.appendChild(definitionText);
                        rowTR.appendChild(definitionTD);

                        let trueAnswersTD = document.createElement("td");
                            let trueAnswersText = document.createTextNode(trueAnswers[i]);
                            trueAnswersTD.appendChild(trueAnswersText);
                        rowTR.appendChild(trueAnswersTD);

                        let answerTD = document.createElement("td");
                            let answerText = document.createTextNode(answers[i]);
                            answerTD.appendChild(answerText);
                        rowTR.appendChild(answerTD);

                        let scoreTD = document.createElement("td");
                            let scoreText = document.createTextNode(score[i]);
                            scoreTD.appendChild(scoreText);
                        rowTR.appendChild(scoreTD);

                    resultsTable.appendChild(rowTR);
                }

            resultsContainer.appendChild(resultsTable);

        content.appendChild(resultsContainer);
            
        let homeButton = document.createElement("button");
        homeButton.setAttribute("class", "testTopText");
        homeButton.setAttribute("style", "float: right");
        homeButton.setAttribute("onClick", "sendHome()");   
            let homea = document.createElement("a");
            homea.setAttribute("style", "color: orangered;")
                let homeText = document.createTextNode("Return Home");
                homea.appendChild(homeText);
            homeButton.appendChild(homea);
        content.appendChild(homeButton);

        console.log(resultsTable);
    });
}

function answered(answers, num, option) {
    answers[num] = option.children[0].innerHTML;
    
    let i = 1;
    while (i <= 4) {
        let currButton = document.getElementById("option_a" + i);
        if (currButton.classList.contains("toggleButton")) {
            currButton.classList.remove("toggleButton");
        }
        i++;
    }
    
    if (option.classList.contains("toggleButton")) {
        option.classList.remove("toggleButton");
    } else {
        option.classList.add("toggleButton");
    }

    let nextButton = document.getElementsByClassName("nextNavButton");
    nextButton[0].style.display = "block";
    
}