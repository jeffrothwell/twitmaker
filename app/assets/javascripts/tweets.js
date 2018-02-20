// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function(){

  console.log("I'm loaded");

  var tweetUlEl = document.querySelector('.tweets');
  var tweetFormEl = document.querySelector('#new_tweet');
  var tweetSubmitEl = document.querySelector('#create-tweet');

  console.log(tweetSubmitEl);

  tweetFormEl.addEventListener('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: this.action,
      method: this.method,
      dataType: 'JSON',
      data: $(this).serialize()
    }).done(function(responseData){
      var newLi = document.createElement('li');
      var pMsgEl = document.createElement('p');
      var timeEl = document.createElement('time');

      pMsgEl.innerText = responseData.tweets.message;
      timeEl.innerText = responseData.tweets.created_at;
      newLi.append(pMsgEl);
      newLi.append(timeEl);
      newLi.classList.add('tweet');
      tweetUlEl.prepend(newLi);
    }).fail(function(_,b,c){
      console.log('failed to tweet');
    })
  });

});
