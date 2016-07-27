var add_facebook_comments = function() {
  $("#fb-comments").empty();
  var disclaimer = '<div class="fb-comment-disclaimer">The Tribune is using Facebook comments on stories. To post a comment, log into Facebook and then add your comment. To report spam or abuse, click the "X" in the upper right corner of the comment box. In certain circumstances, we will take down entire comment boards. Our commenting guidelines can be found <a href="http://www.chicagotribune.com/about/chi-discussions-faq,0,980840.htmlstory">here &#187;</a>.</div>';
  var width = $('#fb-comments').width();
  if ( $(window).width() <= 680 )
    width = $(window).width() - 40;
  var fbml = disclaimer + '<fb:comments href="' +
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname +
      '" num_posts="10" width="' + width + '"></fb:comments>';
  $("#fb-comments").append(fbml);
};

$('.zoomer').click(function(){
    if($('#lolla-chart').hasClass('zoomed')){
        $('#lolla-chart').removeClass('zoomed');
        $('#lolla-chart .band').tooltip('destroy');
        $(this).html('ZOOM IN');
    } else {
      $('#lolla-chart').addClass('zoomed');
        $('#lolla-chart.zoomed .band').tooltip();
        $(this).html('ZOOM OUT');
    }

})

function resetButtons(){
    $('.highlighted').removeClass('highlighted');
    $('.unhighlighted').removeClass('unhighlighted');
    $('.highlighted-click').removeClass('highlighted-click');
    $('.unhighlighted-click').removeClass('unhighlighted-click');

}

/*

// Declare the global var
var artist_arr;

//Load the data into the var
$.getJSON( "./artists.json", function( data ) {
    artist_arr = data.artists;
    artist_arr = $.makeArray(artist_arr);
    // alert("data-loader sez: "+ artists_arr);
  
}, function(){
    // alert("data-loader sez 'OOPS!'");
});

//Use this function to inject artist data into the modal

function callModal(targetBand){
    // alert(artist_arr);

    // var bandIndex = $.inArray(targetBand, artist_arr);
    
    var bandInfo;
    for(var i=0;i<artist_arr.length;i++){
       if(artist_arr[i].unique == targetBand){
        bandInfo = artist_arr[i];
        break;
       }
    }
    if(typeof bandInfo.genre_class == 'undefined' ){
        var colorMe = bandInfo.genre_class;
    } else {
        var colorMe = "";
    }
    $('#myModal .modal-header').html("<h3 class='"+ colorMe +"'>" + bandInfo.name + "</h3>");
    $('#myModal p.genres').html("<strong>Genre breakdown: </strong>" + bandInfo.genre1 + " &raquo; " + bandInfo.genre2 + " &raquo; " + bandInfo.genre3);
    $('#myModal p.from').html("<strong>From: </strong>"+bandInfo.origin);
    $('#myModal p.era').html("<strong>Primary era: </strong>" + bandInfo.primary_era);
    var yearsText='';
    var yearsCounter = 0;
    for(var i=1991; i<=2014; i++){
        if(bandInfo['year_'+ i ] == 1){
            if(yearsCounter == 0 ){
                yearsText = i; 
            } else {
                yearsText = yearsText + ', ' + i; 
            }
            yearsCounter++;
        }
    }
    $('#myModal p.years').html("<strong>Total Lollapalooza performances: </strong>" + yearsCounter + " (" + yearsText + ")");
    if(bandInfo.photo != undefined){
        $('#myModal .image').html("'<img src='"+bandInfo.photo+"' alt ='"+bandInfo.name+"'/>");
    }
    $('#myModal').modal();
}

$('a.band').click(function(){
    if($('#lolla-chart').hasClass('zoomed')){
        $(this).tooltip('hide');
        var targetBand = $(this).attr('data-artist-ID')
        callModal(targetBand);
    }
});
*/
$('.genre-btn').hover(function(){
    // alert('everything');
  var genreTarget = $(this).attr('data-genre');
  $('.band').each(function(){
      $(this).addClass('unhighlighted');
  });
  $('.band--'+genreTarget).addClass('highlighted');
}, function(){
        $('.highlighted').removeClass('highlighted');
        $('.unhighlighted').removeClass('unhighlighted');
});

$('.genre-btn').click(function(){
    resetButtons(true);
    var genreTarget = $(this).attr('data-genre');
    $('.band').each(function(){
        $(this).addClass('unhighlighted-click');
    });
    $('.band--'+genreTarget).addClass('highlighted-click');
});


$(document).ready(function(){
    var offsetTop =  $('#chart-key-wrapper').offset().top;
    $('#chart-key').attr('data-offset-top', offsetTop);
    $('#chart-key-wrapper').height($('#chart-key').height());
    $('#chart-key').width($('#chart-key-wrapper').width());
    $(window).resize(function(){
        $('#chart-key-wrapper').height($('#chart-key').height());
        $('#chart-key').width($('#chart-key-wrapper').width());
    });

    // Load FB comments
    if ( $('meta[property="fb:app_id"]').length > 0 )
        add_facebook_comments();
});