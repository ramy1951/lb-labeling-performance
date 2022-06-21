const express = require("express");
const router = express.Router();

router.all("/", (req, res) => res.send(req.params));

router.get("/annotationCount", (req, res) => {
    console.log(req.user_email);

    return res
        .json({
            metric: 200,
            email: req.user_email
        })
        .end();
});

module.exports = router;
