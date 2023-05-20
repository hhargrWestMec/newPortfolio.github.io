// NOTE: If the values in the bars are changed, be sure to update the 'title' attribute on the respective element in the HTML to match the tooltip with the value in the progress bar

// Progress Bar Initiation 
$(function() {
    // HTML Bar
    $("#HTMLProgressBar").progressbar({value: 85});

    // CSS Bar
    $("#CSSProgressBar").progressbar({value: 60});

    // JavaScript Bar
    $("#JavaScriptProgressBar").progressbar({value: 75});

    // JavaScript Bar
    $("#TypeScriptProgressBar").progressbar({value: 50});

    // Python Bar
    $("#PythonProgressBar").progressbar({value: 30});

    // Java Bar
    $("#JavaProgressBar").progressbar({value: 15}); 

    
    // BootStrap Bar
    $("#BootStrapProgressBar").progressbar({value: 50});
    
    // JQuery Bar
    $("#JQueryProgressBar").progressbar({value: 60});
});

// Progress Bar Tooltips
$(function () {
    $(".skillsWrapper").tooltip({
        position: {
            my: "center bottom-5",
            at: "center top"
        }
    });
})