$(document).ready(function() {

    $.ajax({
        url: 'https://news.ycombinator.com/',
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        data: '{ longUrl: https://www.frontendmentor.io/solutions"}',
        dataType: 'json',
        success: function(response) {
            var result = JSON.parse(response); // Evaluate the J-Son response object.
            console.log(result);
        }
    });
});