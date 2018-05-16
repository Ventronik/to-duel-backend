const authModel = require('../models/auth')
const jwt = require('jsonwebtoken')

//////////////////////////////////////////////////////////////////////////////
// Basic CRUD Methods
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// Login Controller
//
// 1. Make sure that request is good
// 2. Attempt Login
// 3. Create token
// 4. Send back token
//////////////////////////////////////////////////////////////////////////////

function login(req, res, next){
  // 1. Make sure that request is good
  if(!req.body.email){
    return next({ status: 400, message: 'Bad request'})
  }

  if(!req.body.password){
    return next({ status: 400, message: 'Bad request'})
  }
<<<<<<< HEAD

  // 2. Attempt Login
  authModel.login(req.body.username, req.body.password)
=======
  // 2. Attempt Login
  authModel.login(req.body.email, req.body.password)
>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
  .then(function(user){

    // 3. Create token
    const token = jwt.sign({id: user.id}, process.env.SECRET)

    // 4. Send back token
    return res.status(200).send({ token })
  })
  .catch(next)
}


function getAuthStatus(req, res, next){
    res.status(200).send({id:req.claim.id})
}

//////////////////////////////////////////////////////////////////////////////
// Quality of Life functions
//////////////////////////////////////////////////////////////////////////////

function isAuthenticated(req, res, next){
<<<<<<< HEAD

=======
>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
  if(!req.headers.authorization){
    return next({ status: 401, message: 'Unauthorized' })
  }
  const [scheme, credentials] = req.headers.authorization.split(' ')



  jwt.verify(credentials, process.env.SECRET, (err, payload)=>{
    if(err){
      return next({ status: 401, message: 'Unauthorized' })
    }

    req.claim = payload
<<<<<<< HEAD

=======
>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
    next()
  })
}

function isSelf(req, res, next){
<<<<<<< HEAD

  if(parseInt(req.params.userId) !== req.claim.id){
    return next({ status: 401, message: 'Unauthorized' })
  }

  next()
}



=======
  if(parseInt(req.params.userId) !== req.claim.id){
    return next({ status: 401, message: 'Unauthorized' })
  }
  next()
}

>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
module.exports = {
  login,
  getAuthStatus,
  isAuthenticated,
  isSelf
<<<<<<< HEAD
}
=======
}
>>>>>>> ef89495e5cb76d0a8e4a5e7c94f27fac0179c26f
