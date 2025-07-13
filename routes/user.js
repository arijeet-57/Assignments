const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router();

//Admin Routes
router.post('/signup', (req, res) => {
     const username = req.body.username;
     const password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        message: "User has been created successfully!"
    })

});

router.get('/courses', async (req, res) => { //here in this endpoint we did not give the usermiddleware as bu default users should be able to see all the courses available so this does not need any authentication from the headers
    const response = await  Course.find({});

    res.json({
        courses: response
    });
    
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    
})

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    
})

module.exports = router;