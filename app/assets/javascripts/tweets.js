// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function(){

  var tweetForm = document.querySelector('#new_tweet');
  var tweetList = document.querySelector('.tweets')

  tweetForm.addEventListener('submit', function(e){
    e.preventDefault();
    $.ajax({
      url: "/tweets",
      method: "post",
      dataType: "html",
      data: $(this).serialize()
    }).done(function(data){
      $(tweetList).prepend(data);
    })
  });

});
