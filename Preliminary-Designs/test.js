'use strict';


//main function
$(function () {
    const $buttons = $(".question button");
    $buttons.on("click", (e) => {
        const target = $(e.target);
        //other button
        target.parent().find("button").removeClass("btn-primary").addClass("btn-secondary");

        // target button
        target.addClass("btn-primary");
        target.removeClass("btn-secondary");

        // question
        target.closest(".question").next().removeClass("d-none");
    })
})