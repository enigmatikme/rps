(function() {
  //what beats props
  const handsID = {
    "Rock": "Scissors",
    "Scissors": "Paper",
    "Paper": "Rock", 
  }

  const svg = {
    "Rock": "hand-grab-o",
    "Scissors": "scissors", 
    "Paper": "hand"
  }

  let hands = ["Rock", "Scissors", "Paper"];

  let round = 1;

  //provides random int to deal bot hand
  // const randomPlayerHand = (int) => {
    function randomPlayerHand(int) {
    return Math.floor(Math.random() * Math.floor(int));
  }


  //params will be strings
  const winnerChecker = (player1Hand, bot) => {
      let playerScore = $(`.r_${round}`).find('.pl_score');
      let botScore = $(`.r_${round}`).find('.bot_score');
      
    $(".hand").remove();
    $("h3").remove();
    $(".result").remove();
    $(".search__icon").remove();

    let botWinningHand = handsID[player1Hand];
    if (bot === player1Hand) {
      console.log("Tie, rematch!");
      $(".game_container").append(`<h3>Tie! Rematch</h3>`);
      
      return;
    }
    
    if (botWinningHand === bot) {
      console.log("player 1 wins");
      console.log(`${svg[player1Hand]}`)
      $(".round_result").append(`<p class="result">Player 1 Wins!</p>`);

      // $(".player").append(`<p class="hand">${player1Hand}</p>`);
      $(".player").append(
        `<svg class="search__icon">
          <use xlink:href="./img/sprite.svg#icon-${svg[player1Hand]}"></use>
        </svg>`
        );
      $(".bot").append(
        `<svg class="search__icon">
          <use xlink:href="./img/sprite.svg#icon-${svg[botWinningHand]}"></use>
        </svg>`
        );
      // $(".bot").append(`<p class="hand">${bot}</p>`);
      playerScore.html('&#10003;')
      botScore.html('&#9675;')
    } else {
      console.log("bot wins");
      $(".player").append(
        `<svg class="search__icon">
          <use xlink:href="./img/sprite.svg#icon-${svg[player1Hand]}"></use>
        </svg>`
        );
      $(".bot").append(
        `<svg class="search__icon">
          <use xlink:href="./img/sprite.svg#icon-${svg[botWinningHand]}"></use>
        </svg>`
        );
      $(".round_result").append(`<p class="result">Bot Wins!</p>`);

      // $(".player").append(`<p class="hand">${player1Hand}</p>`);
      
      // $(".bot").append(`<p class="hand">${bot}</p>`);
      playerScore.html('&#9675;')
      botScore.html('&#10003;')
    }
    round ++;
    return;

  }

  let playerval = "scissors";
  
  $( ".btn" ).bind( "click", function(e) {
    let botVal = hands[randomPlayerHand(3)];
    
    return winnerChecker(e.target.value, botVal);
  });
})()