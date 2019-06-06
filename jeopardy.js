$(function () {


    const $questionDiv = $('.mainQuestion');
    const $answerDiv = $('.mainAnswer');
    const $hiddenButtons = $('.hidden-buttons');

    console.log("ready");

    // let $query = "dogs";
    // console.log($query);
    let question = getQuestion();
    // $("form").trigger("reset");
    // showGif(gif)



    async function getQuestion() {
        let apiURL = `http://jservice.io/api/random`;
        let results = await $.get(apiURL);

        setTimeout(function(){ 
            $hiddenButtons.css("display", "block"); }, 500);


        // 

        // console.log(res.data[0].images.original.url);

        // return ;

        let questions = results.map(result => {

            return {
                id: result.id,
                question: result.question,
                answer: result.answer

                //ternary operator ...
            };
        });
        console.log(questions);
        console.log(questions.id);
        console.log(results.id);
        showQuestion(questions);
        showAnswer(questions);




    }

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


    // function newQuestion {

    //     could just be to clear out both divs and call new question
    // }




    // // Pull question answer from API
    //  async function getQuestion() {
    //     let apiURL = `http://api.giphy.com/v1/gifs/search?q=dogs&api_key=dc6zaTOxFJmzC`;
    //     let results =  await $.get(apiURL, function (res) {
    //         console.log(Hi);
    //         console.log(results);

    //         showQuestion(res.data[0].images.original.url)
    //         // console.log(res.data[0].images.original.url);

    //         // return ;


    //     })
    // }

    // async function getAnswer () {

    // }
    // console.log(Hi);


    // //show question on page
    // function showQuestion(imgLink) {
    //     let question = $(
    //         `<div class="col-md-4">
    //             <div>
    //                 <img src="${imgLink}" alt="">
    //             </div>
    //         </div>`
    //     )
    //     $questionDiv.append(question);
    // }





});