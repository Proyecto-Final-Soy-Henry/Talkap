const {Router} = require('express');
const handleUser =  require('./handlers/handleUser.js');
const router = Router();

router.post('/',handleUser);
router.get('/users',userListHandler);

module.exports =  router;