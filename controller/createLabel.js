const pool = require("../db")

const createLabel = (
    label_id,
    labelJson,
    datarowId,
    userId,
    userEmail,
    secondsToLabel,
    skipped,
    deleted
) => {
    pool.query(
        "insert into `Labels` (`id`, `label`, `datarowId`, `userId`, `userEmail`, `secondToLabel`, `skipped`, `deleted`) values (?, ?, ?, ?, ?, ?, ?, ?);",
        [label_id, labelJson, datarowId, userId, userEmail, secondsToLabel, skipped, deleted],
        function (err, results, fields) {
            console.log(err); // results contains rows returned by server
        }
    );
};

module.exports = { createLabel };
