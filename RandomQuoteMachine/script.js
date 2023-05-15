$(document).ready(function () {
    $.get("https://api.quotable.io/random", function (data, status) {
        if (status == "success") {
            $("#text").text(data.content);
            $("#author").text(data.author);
        };
    });
});

$("#new-quote").click(function () {
    $.get("https://api.quotable.io/random", function (data, status) {
        if (status == "success") {
            $("#text").text(data.content);
            $("#author").text(data.author);
        };
    });
});

$("#tweet-quote").click(function () {
    var currentQuote = $("#text").html();
    var currentAuthor = $("#author").html();

    $("#tweet-quote").attr("href", "http://twitter.com/intent/tweet?text=" + currentQuote + ' ~' + currentAuthor);
});