const { Router } = require("express");

const router = Router();
const handleOneUser = require("./handlers/handleCurrentUser.js");

router.get(`/users/:email`, handleOneUser);

module.exports = router;
