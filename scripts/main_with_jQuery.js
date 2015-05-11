var colors = ['#2ecc71', '#16a085', '#3498db', '#c0392b', '#e67e22', '#f39c12', '#f1c40f','#f22613', '#96281b', '#1bbc9b', '#1e824c', '#3498db', '#2574a9', '#2abb9b']
var songs = [
  {
    name: 'title',
    url: 'audiofiles/chinese.mp3',
    id: 'Chinese',
    time: '3:21'
  },
  {
    name: 'title1',
    url: 'audiofiles/spanish.mp3',
    id: 'Chinese',
    time: '2:57'
  },
  {
    name: 'title2',
    url: 'audiofiles/italian.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title3',
    url: 'audiofiles/french.mp3',
    id: 'French',
    time: '1:43'

  },  {
    name: 'title4',
    url: 'audiofiles/chinese.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title5',
    url: 'audiofiles/spanish.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title6',
    url: 'audiofiles/italian.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title7',
    url: 'audiofiles/french.mp3',
    id: 'French',
    time: '1:43'
  },
    {
    name: 'title8',
    url: 'audiofiles/chinese.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title9',
    url: 'audiofiles/spanish.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title10',
    url: 'audiofiles/italian.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title11',
    url: 'audiofiles/french.mp3',
    id: 'French',
    time: '1:43'
  },
  {
    name: 'title12',
    url: 'audiofiles/chinese.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title13',
    url: 'audiofiles/spanish.mp3',
    id: 'Chinese',
    time: '1:43'
  },
  {
    name: 'title14',
    url: 'audiofiles/italian.mp3',
    id: 'Chinese',
    time: '1:56'
  },
  {
    name: 'title15',
    url: 'audiofiles/french.mp3',
    id: 'French',
    time: '1:41'
  }

]



// function to build buttons on page
function buildButtons() {
  var songsArr = $(songs).each(function(i,e){
  var button = '<button class="music-btn" id="' + this.id + '" data-path="'+this.url+'" data-name="'+this.name+'" data-time="'+ this.time +'"></button>';
      $('.btn-pad').append(button);
  });
  
}
buildButtons();


// Extracts the song URL from the element
function getSongUrl(button) {
  return button.attr('data-path');
}

// Sound manager setup and click event for buttons
soundManager.setup({
  url: '../audiofiles/',
  onready: function() {


    $('.music-btn').on('click', function(){
      var mySound = soundManager.createSound({
        url: getSongUrl($(this))
      });
      mySound.play();
      showTitle($(this));
      appendMusicTime($(this));
    });


  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});


// slideRight function
function sliderRight(element) {
  element.animate({
    left: "+=135"
  }, 300);
}

// slideLeft function
function sliderLeft(element) {
  element.animate({
    left: "-=135"
  }, 300);
}

var slideLorR = 1;

// show title function
function showTitle(button) {
  var pElement = $('#songTitle');
  if (slideLorR === 1) {
    sliderRight(pElement);
    slideLorR -= 1;    
  } else {
    sliderLeft(pElement);
    slideLorR += 1
  }
  
  pElement.text(button.attr('data-name'));
  
}

// function to assign random color
function assignRandColor() {
  $('.music-btn').each(function(){
    var randomNumber = Math.ceil(Math.random() * colors.length);
    $(this).css('backgroundColor', colors[randomNumber]);
  });
}
assignRandColor()


var addTimeText = $('.btn-pad').append('<p id="songTime">time</p>');
// function to append song length

function appendMusicTime(element) {
  var songTime = $('#songTime');
  slideLorR === 1 ? sliderRight(songTime) : sliderLeft(songTime);
  songTime.text(element.attr('data-time'));

}
