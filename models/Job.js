const Sequelize = require('sequelize');
const db = require('./connection');

const Job = db.define('Job', {
    TITULO: {
        type: Sequelize.STRING, 
    },
    SALARY: {
        type: Sequelize.STRING, 
    },
    COMPANY: {
        type: Sequelize.STRING, 
    },
    EMAIL: {
        type: Sequelize.STRING, 
    },
    NEW: {
        type: Sequelize.STRING, 
    }
});

module.exports = Job