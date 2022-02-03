'use strict';

var utils = require('../utils/write.js');
var Subjects = require('../service/SubjectsService');

module.exports.getSubjects = function getSubjects(req, res, next) {
    Subjects.getSubjects()
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};