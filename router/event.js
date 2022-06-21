const express = require("express");
const crypto = require("crypto");
const { createLabel } = require("../orm");
const router = express.Router();
const verifyHmac256 = require("verify-hmac-sha");

router.post("/newLabel", (req, res) => {
    console.log("newLabel");
    console.log("req.headers :>> ", req.headers);
    console.log("req.body :>> ", req.body);
    console.log("req.params :>> ", req.params);

    createLabel(
        req.body.id,
        req.body.label,
        req.body.dataRow.id,
        req.body.user.id,
        req.body.user.email,
        req.body.secondsToLabel,
        req.body.skipped,
        req.body.deleted
    );
    return res.status(201).end();
});

module.exports = router;
