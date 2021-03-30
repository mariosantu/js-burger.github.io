//Il programma dovrà consentire di calcolare il prezzo del panino selezionando o deselezionando gli ingredienti proposti
//
//tutto il calcolo avviene all'attivazione del pulsante 'calculate'

//creo array per i coupon

var arrayCoupon = ['coupon1','coupon2','coupon3','coupon4'];

var calculateButton = document.getElementById('calculate');

calculateButton.addEventListener('click', function() {

    var prezzoBaseBurger = 50;
  
    var ingredientsCheckboxes = document.getElementsByClassName('ingredients');
    
    for( var i = 0; i < ingredientsCheckboxes.length; i++ ) {
        var checkBox = ingredientsCheckboxes[i];
        
        if ( checkBox.checked == true ) {
            var ingredientsPrice = parseFloat(checkBox.value);

            prezzoBaseBurger += ingredientsPrice;

        }
    }

    var discountCoupon = document.getElementById('coupon').value;

    if (arrayCoupon.includes(discountCoupon)) {
        prezzoBaseBurger = prezzoBaseBurger - (prezzoBaseBurger * 0.3);
    }

    document.getElementById('final-price').innerHTML = 'il tuo prezzo è ' + prezzoBaseBurger.toFixed(2) + '$';

});



