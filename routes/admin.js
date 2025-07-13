const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

//Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    //check if an admin user wth this username already exists
    await Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: 'Admin created successfully !'
    })
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newcCourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: "Course created successfully !", courseId: newcCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await  Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;