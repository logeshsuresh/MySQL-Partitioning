const studentService = require('../services');

const createStudent = async (req, res) => {

    const { student_id, name, birthdate } = req.body;

    if (!student_id || !name || !birthdate) {
        return res.status(400).json({ 
            error: 'required fields missing' 
        });
    } 

    try {
        
        const student = await studentService.createStudent({ student_id, name, birthdate });
        console.log(student);
        return res.status(200).json({ 
            success: true,
            message: 'successfully created a student',
            data: student,
            error: {}
        });

    } catch (error) {
        return res.status(200).json({ 
            success: false,
            message: error.message,
            data: {},
            error: error
        });
    }
};

const getStudent = async (req, res) => {

};

module.exports = {
    createStudent,
    getStudent
};