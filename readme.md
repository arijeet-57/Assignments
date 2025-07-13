 Description:
 Need to implement a course selling app. Make sure to setuyp mongodb instance before starting:
 mongodb+srv://admin2:root@cluster57.achpbe2.mongodb.net/
 It needs to support two types of users:-
 1. Users
 2. Admins

 Admins are allowed to signup, create courses
 Users are allowed to sigup, view courses, purchase cfourses.
 Example like udemy

 In this project authentication is not implemeneted the right way. We will learn how to do that in the next assignment
 For this one, in every authenticated requests, you need to sed the username and password in the headers (and not in the jwt).
 This is the reason why thsi assignment foes not have a sign in route

 NEED to use mongdb to store all the data 
 ADMIN ROUTES:
- POST /admin/signup
Description: Creates a new admin account.
Input Body: { username: 'admin', password: 'pass' }
Output: { message: 'Admin created succesfully' }
-POST /admin/courses
Description: Creates a new course
Input: Headers: {'username': 'username', 'password': 'password' }, Body: {
    title: 'course title', description: 'course desc', price: 100,
    imagelinke: 'https://linktoimage.com' }
Output: { message: 'Course created succdessfully', courseId: 'new course ID' }
-GET /admin/courses
Description: Returns all the courses.
Input: Headers: { username: 'admin', password: 'pass' }
Output: { courses: [ { id: 1, title: 'course title', description: 'course desc', price: 100, imagelink: 'https://linktoimage.com', published: true},]}

USER ROUTES:
POST /users/signup
Description: Creates a new user account.
Input: { username: 'user', password: 'pass' }
Output: { message: 'User created successfully' }
GET /users/courses
Description: Lists all the courses.
Input: Headers: { 'username': 'username', 'password': 'password' }
Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ...]}
POST /users/courses/:courseId
Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
Input: Headers: { 'username': 'username', 'password': 'password' }
Output: { message: 'Course purchased successfully' }
GET /users/purchasedCourses
Description: Lists all the courses purchased by the user.
Input: Headers: { 'username': 'username', 'password': 'password' }
Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... )}