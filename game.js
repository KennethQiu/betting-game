// Javascript
var name = 'Big Loser';
var bankroll = 100;

// JQuery
$(document).ready(function(){
  // listen to enter name submit button

  // close popup
  // set name equals input


  // listen to bet submit button
  $('.bet_form').submit(function(){
    // set message box status to original
    $('.message_box').removeClass('alert')
    // set variables
    var bet_amount = $('#bet_amount').val();
    var bet_number = $('#bet_number').val();
    var win_number = Math.floor(Math.random() * 10) + 1;
    // check if bet amount is affordable
    if(bet_amount <= bankroll) {    
      processBet(bet_amount,bet_number,win_number);       
    }else{
      $('.message').text('You dont have enough money.');
      $('.message_box').addClass('alert')
    };
  });

  function processBet(bet_amount,bet_number,win_number) {
    bet_amount = parseInt(bet_amount);
    bet_number = parseInt(bet_number);
    console.log(bet_amount,bet_number,win_number); //temp
    switch(bet_number){
      case win_number:
        result = 'win';
        bankroll += bet_amount;
        updatePage(win_number,result,bankroll);
        break;
      case win_number+1:        
      case win_number-1:
        result = 'close'
        updatePage(win_number,result,bankroll);
        break;
      default:
        result = 'lose'
        bankroll -= bet_amount;
        if(bankroll === 0){gameOver()};
        updatePage(win_number,result,bankroll);        
        break;
    };
  };

  function updatePage(win_number,result,bankroll) {
    console.log(result)
    $('#bankroll').text(bankroll);
    $('.win_number').text(win_number);
    switch(result){
      case 'win':
        $('.message').text('You win! Try again!');
        break;
      case 'close':
        $('.message').text('Close bet! Try again!');
        break;
      case 'lose':
        $('.message').text('Bad Luck! Try again!');
        break;
    };
  };

  function gameOver() {
    // temp
    $('.message').text('Game Over');
    $('.message_box').addClass('alert')
    // call popup with restart button
    // disable game submit button
  };
});