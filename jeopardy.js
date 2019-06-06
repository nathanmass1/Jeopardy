$(function () {
    
    const $questionDiv = $('.mainQuestion');
    const $answerDiv = $('.mainAnswer');
    const $hiddenButtons = $('.hidden-buttons');

    console.log("ready");

    let question = getQuestion();

    async function getQuestion() {
        let apiURL = `//jservice.io/api/random`;
        let results = await $.get(apiURL);

        setTimeout(function(){ 
            $hiddenButtons.css("display", "block"); }, 500);

        let questions = results.map(result => {

            return {
                id: result.id,
                question: result.question,
                answer: result.answer

                //ternary operator ...
            };
        });
        showQuestion(questions);
        showAnswer(questions);

    };

    function showQuestion(questions) {
        for (let question of questions) {
            let questionResult = $(
                `<div class="col-md-7">
            <div>
            <br>
            <h5 class="card-title">${question.question}</h5>
            </div>
        </div>`

            )
            $questionDiv.append(questionResult);
        }
    }

    $(".btn-primary").on("click", function (evt) {
        evt.preventDefault();
        $(".mainAnswer").css("display", "block");
    });

    function showAnswer(questions) {
        for (let question of questions) {
            let answerResult = $(
                `<div class="col-md-6 text-center ">
                <div>
                <br>
                <h5 class="card-title"> What is ${question.answer}?</h5>
                </div>
            </div>`

            )
            $answerDiv.append(answerResult);
            $(".mainAnswer").css("display", "none");


        }
    }


    $(".btn-success").on("click", function (evt) {
        evt.preventDefault();

        $questionDiv.empty();
        $answerDiv.empty();
        getQuestion();

    });
});
