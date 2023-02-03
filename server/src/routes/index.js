const { Router } = require("express");

const router = Router();
const handleOneUser = require("./handlers/handleCurrentUser.js");

const coso = require("./handlers/sendMail");
coso();

router.get(`/users/:email`, handleOneUser);

module.exports = router;
