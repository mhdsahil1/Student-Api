const express = require('express');
const router = express.Router();

let students = [
    { id: 1, name: 'John Doe', course: 'CS' },
    { id: 2, name: 'Jane Smith', course: 'IT' }
];

router.get('/', (req, res) => {
    res.json(students);
});

router.get('/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json(student);
});

router.post('/', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        course: req.body.course
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
});

module.exports = router;
