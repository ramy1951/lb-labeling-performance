const express = require("express");
var morgan = require("morgan");
const bodyParser = require("body-parser");
const annotatorMetricsRouter = require("./router/annotatorMetrics");
const event = require("./router/event");
const app = express();
const port = 3000;

app.param("email", (req, res, next, email) => {
    req.user_email = email;
    return next();
});

app.use(morgan("combined"));
    
// for parsing application/json
app.use(
    bodyParser.json({
        verify: function (req, res, buf) {
            req.rawBody = buf;
        },
    })
);
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/annotator-metrics/:email", annotatorMetricsRouter);
app.use("/event", event);
app.all("/", (req, res) => res.send("yes"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
