//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti
//
//tutto il calcolo avviene all'attivazione del pulsante 'calculate'

var calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function() {

    var prezzoBaseBurger = 50;
  
    var ingredientsCheckboxes = document.getElementsByClassName('ingredients');
    
    for( var i = 0; i < ingredientsCheckboxes.length; i++ ) {
        var checkBox = ingredientsCheckboxes[i];
        
        if ( checkBox.checked == true ) {
            var ingredientsPrice = parseInt(checkBox.value);

            prezzoBaseBurger += ingredientsPrice;

        }
    }

    console.log(prezzoBaseBurger);
    document.getElementById('final-price').innerHTML = 'il tuo prezzo è ' + prezzoBaseBurger.toFixed(2) + '$';

});



