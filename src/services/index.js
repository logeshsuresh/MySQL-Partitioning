const studentRepository = require('../repositories/student-repository');

async function createStudent(data) {
    try {
        const student = await studentRepository.createStudent(data);
        return student;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createStudent
};