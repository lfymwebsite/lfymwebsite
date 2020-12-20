function loadQuestion(data, num) {
    const content = document.getElementById("content");

    // question
    let question = document.createElement("h2");
        let questionText = document.createTextNode("Q: " + (num + 1) + data[num]["question"]);
        question.appendChild(questionText);
    content.appendChild(question);

    // multiple choice answers grid
    let gridContainer = document.createElement("div");
    gridContainer.setAttribute("class", "grid-container");
        
    let a1 = document.createElement("button");
        a1.setAttribute("class", "button");
        a1.setAttribute("onclick", "answeredA(answers, num)");
            let a1a = document.createElement("a");
                let a1Text = document.createTextNode("a) " + (num + 1));
                a1a.appendChild(a1Text);
            a1.appendChild(a1a);
        gridContainer.appendChild(a1);

        let a2 = document.createElement("button");
        a2.setAttribute("class", "button");
        a2.setAttribute("onclick", "answeredB(answers, num)");
            let a2a = document.createElement("a");
                let a2Text = document.createTextNode("b) " + (num + 1));
                a2a.appendChild(a2Text);
            a2.appendChild(a2a);
        gridContainer.appendChild(a2);

        let a3 = document.createElement("button");
        a3.setAttribute("class", "button");
        a3.setAttribute("onclick", "answeredC(answers, num)");
            let a3a = document.createElement("a");
                let a3Text = document.createTextNode("c) " + (num + 1));
                a3a.appendChild(a3Text);
            a3.appendChild(a3a);
        gridContainer.appendChild(a3);

        let a4 = document.createElement("button");
        a4.setAttribute("class", "button");
        a4.setAttribute("onclick", "answeredD(answers, num)");
            let a4a = document.createElement("a");
                let a4Text = document.createTextNode("d) " + (num + 1));
                a4a.appendChild(a4Text);
            a4.appendChild(a4a);
        gridContainer.appendChild(a4);
    
    content.appendChild(gridContainer);
    
    // nav buttons
    let navButtons = document.createElement("div");
    navButtons.setAttribute("class", "navButton");

        let prev = document.createElement("button");
        prev.setAttribute("class", "button prevNavButton");
        prev.setAttribute("onclick", "prev()");
            let prevA = document.createElement("a");
                let prevText = document.createTextNode("Previous");
                prevA.appendChild(prevText);
            prev.appendChild(prevA);
        navButtons.appendChild(prev);

        let next = document.createElement("button");
        next.setAttribute("class", "button nextNavButton");
        next.setAttribute("onclick", "next()");
            let nextA = document.createElement("a");
                let nextText = document.createTextNode("Next");
                nextA.appendChild(nextText);
            next.appendChild(nextA);
        navButtons.appendChild(next);
    
    content.appendChild(navButtons);

}

function prev() {
    $.getJSON("../dummy.json", function(data) {
        if (num > 0) {
            document.getElementById("content").innerHTML = "";
            num--;
            loadQuestion(data, num);
        }
    }); // end of getJSON
}

function next() {
    $.getJSON("../dummy.json", function(data) {
        if (num + 1 < Object.keys(data).length) {
            document.getElementById("content").innerHTML = "";
            num++;
            loadQuestion(data, num);
        }
    }); // end of getJSON
}

function answeredA(answers, num) {
    answers[num] = "a";
    console.log(answers);
}

function answeredB(answers, num) {
    answers[num] = "b";
    console.log(answers);
}

function answeredC(answers, num) {
    answers[num] = "c";
    console.log(answers);
}

function answeredD(answers, num) {
    answers[num] = "d";
    console.log(answers);
}

