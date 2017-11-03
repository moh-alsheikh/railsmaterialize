// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require materialize




$(function() {
    // $.material.init();
    // setup for all dropdown
    //$(".md-dropdown").dropdown({ "dropdownClass": "my-dropdown", "optionClass": "my-option awesome" });
});

$(document).ready(function() {

    $('.slider').slider();

    $('.pricing-select').material_select();
    $('.collapsible').collapsible();
    $(".dropdown-button").dropdown();
    $('ul.tabs').tabs();
    $('select').material_select();
    $('.modal').modal();
    Materialize.updateTextFields();


    $(".readonly-star .star").each(function() {
        $(this).raty('set', { readOnly: true });
    });


    $('#contest_cancel_modal').modal({
            dismissible: true, // Modal can be dismissed by clicking outside of the modal
            opacity: .5, // Opacity of modal background
            inDuration: 300, // Transition in duration
            outDuration: 200, // Transition out duration
            startingTop: '4%', // Starting top style attribute
            endingTop: '10%' // Ending top style attribute
        }
    );

})


