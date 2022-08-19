const express = require("express")
const router = express.Router()

const users = []

router.route("/users").get((req, res)=>{
    res.json(users)
}).post((req, res)=> {
    const { user } = req.body
    users.push({username: user.username, location: user.location})

    

    console.log(users)
    
    res.json({loggedIn: true, status: "Everything went well"}) 
}).delete((req, res)=>{
    const { username, location } = req.body
    const existingUser = users.find(u => u.username === username && u.location === location)

    console.log(existingUser)

    if(!existingUser) {
        res.statusCode(401).json({ errorStatus: "Credentials did not match"})
    }

    users.splice(users.indexOf(existingUser), 1)
    res.json(users)

    console.table(users)
})



module.exports = router