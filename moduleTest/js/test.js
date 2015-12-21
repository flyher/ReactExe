define(['jquery'], function (jquery) {
    $("#a").html("a");

    $("#b").click(function () {
        $("#a").html("b");
    });
});
