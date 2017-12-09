// app/routes.js

var main_controller = require('../controller/mainController');

module.exports = function(app, passport) {

    // =====================================
    // general
    // =====================================

    app.get('/', main_controller.frontpage);



};