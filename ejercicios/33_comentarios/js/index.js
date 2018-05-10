$(document).ready(function(e){
    $.ajax({
        method:"GET",
        url: "https://jsonplaceholder.typicode.com/posts/1/comments",
    })
    .done(function(response) {
        $.each(response, function(index, elem) {
            let elemName = elem.name;
            let elemEmail = elem.email;
            let elemBody = elem.body;
            let img = `<img src="img/anon.gif">`

            let eachComment = $("<article>");
            eachComment.addClass("eachComment");

            let left = $("<div>");
            left.addClass("left");
            left.append(img);
            eachComment.append(left);

            let right = $("<div>");
            right.addClass("right");
            eachComment.append(right);


            let name = $("<p>");
            name.addClass("name");
            name.text(elemName);
            right.append(name);

            let email = $("<a>");
            email.addClass("mail");
            email.attr("href", `mailto:${elemEmail}`);
            email.text(elemEmail);
            right.append(email);

            let body = $("<p>");
            body.addClass("comment");
            body.text(elemBody);
            right.append(body);

            $(".commentBox").append(eachComment);
        })
    });
});