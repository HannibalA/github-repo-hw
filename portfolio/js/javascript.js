// scroll function
$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      });
  });
// scroll function end
 $(document).ready(function(){
  $.ajax({
    type:"GET",
    url: "https://api.github.com/users/hannibala/repos",
    success: function(repos){
      for (i = 0; i < repos.length; i++){
        var newRepoUrl = buildRepoUrl(repos[i])
        $(".list-group").append(newRepoUrl)
      } 

    },
  });

  function buildRepoUrl (repoData) {
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.owner.login + "/";
    commitsApiUrl += repoData.name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("list-group-item")
      .append(repoData.name)
    return newLink;
  }

});