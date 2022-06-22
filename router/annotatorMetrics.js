const express = require("express");
const router = express.Router();
const pool = require("../db");

router.all("/", (req, res) => res.send(req.params));

router.get("/annotationCount", (req, res) => {
    const count = pool.query(
        `select COUNT(*) as count from Labels where userEmail = ?;`,
        [req.user_email],
        function (err, rows, fields) {
            // console.log('err :>> ', err);
            // console.log('rows :>> ', rows[0].count);
            console.log("count :>> ", count);
            return res
                .json({
                    annotationCount: rows[0].count,
                    email: req.user_email,
                })
                .end();
        }
    );
});

router.get("/all", (req, res) => {
    const count = pool.query(
        `select userEmail as email, SUM(secondToLabel) as secondsToLabel from Labels group by userEmail;`,
        function (err, rows) {
            console.log("count :>> ", count);
            if(err)
                return res.status(400).json(err)


            return res
                .json({
                    annotationCount: rows,
                    email: req.user_email,
                })
                .end();
        }
    );
});

module.exports = router;
