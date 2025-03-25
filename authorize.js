const jwt = require('jsonwebtoken')

const authorize = (allowedRoles)=>(req,res,next)=>{
    // console.log('Authorize middleware triggered')
    console.log('Cookies:', req.cookies);

    const token = req.cookies?.token
    console.log(token)
    console.log("no token")
    if(!token) return res.status(403).send('Access denied, No token provided')
    
    try {
        
        const decoded = jwt.verify(token, process.env.SECRETKEY)
        req.user = decoded
        console.log('Decoded token:',decoded)
        // check if the user's role is in the allowed roles

        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).send('Acess denied, insufficient permissions.')
        }
        next()
    } catch (err) {
        console.log('Token verification error', err.message)

        if(err.name === 'TokenExpiredError'){
            return res.status(401).send('Token expired')
        }else if (err.name ==='jsonWebTokenError'){
            return res.status(400).send('Invalid token')
        }
        res.status(400).send('Invalid token')
    }
}

module.exports = authorize