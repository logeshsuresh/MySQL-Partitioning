const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

class Student extends Model {}

Student.init(
  {
    student_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: false, 
    }
  },
  {
    sequelize,
    modelName: 'Student',
    tableName: 'students', 
    timestamps: false, 
    partitioned: true 
  }
);

module.exports = Student;
