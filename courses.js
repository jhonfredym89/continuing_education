const courses = [
    {
        id: 1,
        name: 'Introduction to Node.JS',
        duration: '8 weeks',
        price: 0
    },
    {
        id: 2,
        name: 'Introduction to design patterns',
        duration: '20 hours',
        price: 50000
    },
    {
        id: 3,
        name: 'Advanced database concepts',
        duration: '2 months',
        price: 95350
    }
];

const options = {
    id: {
        demand: true
    },
    identificationCard: {
        alias: 'ic',
        demand: true
    },
    name: {
        alias: 'n',
        demand: true
    }
}

const args = require('yargs')
                .command('inscribir', 'Enroll in an extension course', options)
                .argv;

module.exports = {
    courses,
    args
};