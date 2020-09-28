$(document).ready(function () {
    let $sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let $sentenceNumber = 0;
    let $sentence = $sentences[$sentenceNumber];
    let $charNumber = 0;
    let $highlight = $("#yellow-block");
    let $highlightPosition = 0;

    $("#sentence").text($sentence);

    // Hide Capital letter container //
    $('#keyboard-upper-container').hide();

    // Enable shift key //
    $(document).keydown(function (e) {
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').hide();
            $('#keyboard-upper-container').show();
        }

    });

    $(document).keypress(function (e) {
        $(`#${e.keyCode}`).css('background-color', 'yellow')

        //if pressed key == desired key
        if (e.which == $sentences[$sentenceNumber].charCodeAt($charNumber)) {
            $charNumber++;
            $letter = $sentence.substring($charNumber, $charNumber + 1);
            $("#target-letter").text($letter);

            // Marks green leaf when correct button is typed //
            let $right = $("<span class='glyphicon glyphicon-leaf'></span>");
            $($right).addClass('.glyphicon-leaf');
            $($right).appendTo("#feedback");
        } else {

            // Marks fire when incorrect button is pressed //
            let $wrong = $("<span class='glyphicon glyphicon-fire'></span>")
            $($wrong).addClass('.glyphicon-fire')
            $($wrong).appendTo('#feedback')
        }


        $highlightPosition += 21;
        $($highlight).css("left", $highlightPosition + "px");

        // WPM interval
        // let fecha = (Date.now())
        // setInterval(function () {
        //     let now = Date.now()
        //     let resultado = now - fecha
        //     fecha = now

        //     console.log(resultado)
        // }, 5000);

        //date.now(numberOfWords / minutes - 2 * numberOfMistakes)

        //var $myElement = $('#myElem');
        // if ($sentences.val().length > 0) {
        //     // Do something now that there is some value in the element
        // }
    });

    // Once shift ket is released screen will revert to small keyboard //
    $(document).keyup(function (e) {
        let charCode = e.key.charCodeAt(0)
        if (e.keyCode == 16) {
            $('#keyboard-lower-container').show();
            $('#keyboard-upper-container').hide();
        }

        console.log(e.keyCode);
        $(`#${charCode}`).css('background-color', '#f5f5f5')
    });

});