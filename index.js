const {courses, args} = require('./courses');
const fs = require('fs');

let findCourse = id => courses.find(course => course.id == id);

let createFile = course => {
    text = 'COURSE INFORMATION' + '\n' + 'Id: ' + course.id + '\n' + 'Name: ' + course.name +
            '\nDuration: ' + course.duration + '\nPrice: ' + course.price +
            '\nSTUDENT INFORMATION' + '\n' +  'Identification Card: ' + args.ic + 
            '\nName: ' + args.name;
    fs.writeFile('enrolled.txt', text, (error) => {
        if (error) throw (error);
    });
}

if (args._[0] == 'inscribir') {
    let course = findCourse(args.id);

    if (course == undefined) {
        console.log('There is not course with id: ' + args.id);
    } else {
        console.log('The student has been enrolled and the file created');
        createFile(course);
    }
    
} else {
    console.log('----- EXTENSION COURSES -----');
    
    courses.forEach((item, index) => {
        setTimeout(function() {
            console.log('Id: ' + item.id);
            console.log('Name: ' + item.name);
            console.log('Duration: ' + item.duration);
            console.log('Price: ' + item.price);
            console.log('--------------------------------------');
        }, 2000 * index);
    });
}