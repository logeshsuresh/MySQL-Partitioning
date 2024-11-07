// const CrudRepository = require('./crud-repository');
const Student = require('../models/student'); 
const { getPartition } = require('../utils');


class StudentRepository {
    constructor() {
        this.model = Student;
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new StudentRepository();
        }
        return this.instance; 
    }

    async createStudent(data) {
        try {
            const response = await this.model.create({
                ...data,
            });
            
            return response;
        } catch (error) {
            console.log(error);
            throw new Error("Error creating the resource");
        }
    }
}

module.exports = StudentRepository.getInstance();
