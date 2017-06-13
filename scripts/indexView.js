'use strict';

let indexView = (function(handlebarsModule) {

    function registerHelpers() {
        handlebarsModule.registerHelpers();
    }

    function renderNotes(notes) {
        let createNoteListHtml = Handlebars.compile($('#note-list-template').html());
        $('#note-list').html(createNoteListHtml(notes));
    }

    function renderNoteCounter(noteCounter) {
        let createNoteCounterHtml = Handlebars.compile($('#note-count-template').html());
        $('#note-count').html(createNoteCounterHtml(noteCounter));
    }

    function selectStyle(theStyle) {
        $('#styleswitcher').val(theStyle);
    }

    function selectSortOrder(theSortOrder) {
        $('#' + theSortOrder).prop('checked', true);
    }

    function selectShowFinished(theSelected) {
        $('#filtershowfinished').prop('checked', theSelected);
    }

    function getSelectedStyle() {
        return $('#styleswitcher').val();
    }

    function getSelectedSortOrder() {
        return $('input[name=sortorder]:checked').val();
    }

    function isShowFinishedSelected() {
        return $('#filtershowfinished').is(':checked');
    }

    return {
        registerHelpers,
        renderNotes,
        renderNoteCounter,
        selectStyle,
        selectSortOrder,
        selectShowFinished,
        getSelectedStyle,
        getSelectedSortOrder,
        isShowFinishedSelected
    };
})(handlebarsModule);