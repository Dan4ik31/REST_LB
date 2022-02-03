'use strict';

var utils = require('../utils/writer.js');
var Book = require('../service/BookService');

module.exports.addBook = function addBook(req, res, next) {
    var subject_name = req.swagger.params['subject_name'].value;
    var book_name = req.swagger.params['book_name'].value;
    Book.addBook(subject_name, book_name)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.deletePet = function deletePet(req, res, next) {
    var subject_name = req.swagger.params['subject_name'].value;
    var book_name = req.swagger.params['book_name'].value;
    Book.deletePet(subject_name, book_name)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getSubject = function getSubject(req, res, next) {
    var id = req.swagger.params['id'].value;
    Book.getSubject(id)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.updateBook = function updateBook(req, res, next) {
    var subject_name = req.swagger.params['subject_name'].value;
    var book_name = req.swagger.params['book_name'].value;
    var new_book_name = req.swagger.params['new_book_name'].value;
    Book.updateBook(subject_name, book_name, new_book_name)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};