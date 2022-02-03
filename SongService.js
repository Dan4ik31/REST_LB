'use strict';

exports.addBook = function (subject_name, book_name) {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}

exports.deletePet = function (subject_name, book_name) {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}

exports.getSubject = function (id) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json'] = {};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

exports.updateBook = function (subject_name, book_name, new_book_name) {
    return new Promise(function (resolve, reject) {
        resolve();
    });
}