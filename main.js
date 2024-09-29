var name = $('#postname')
var post = $('#posttext')

var deletePost = $('<button type="button" class="btn-close" aria-label="Close"></button>')



$("#postbtn").on('click', function () {



  var deletePost = $('<button type="button" class="btn-close" aria-label="Close"></button>').addClass("deletebtn")

  var name = $("#postname").val();
  var post = $("#posttext").val();
  var publish = function () {

    
    $('<h4 class="newname">' + name + '</h4>').append('<p class="newpost">' + post + '</p>').append(deletePost).appendTo('#post')
    $("#postname").val('')
    $("#posttext").val('')

    $(".btn-close").on("click", function () {
      $(this).parent().remove();
    });

    }
    publish();

  })
 


