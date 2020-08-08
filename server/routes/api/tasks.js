var router = require("express").Router();
var mongoose = require("mongoose");
var User = mongoose.model("User");
var Task = mongoose.model("Task");
var auth = require("../auth");

// Preload id objects on routes with ':id'
router.param("id", function (req, res, next, id) {
  Task.findById(id)
    .populate("owner")
    .then(function (task) {
      if (!task) {
        return res.sendStatus(404);
      }

      // delete task.owner;
      req.task = task;

      return next();
    })
    .catch(next);
});

router.get("/all", auth.required, function (req, res, next) {
  var query = {};
  var limit = 20;
  var offset = 0;

  if (typeof req.query.limit !== "undefined") {
    limit = req.query.limit;
  }

  if (typeof req.query.offset !== "undefined") {
    offset = req.query.offset;
  }

  query.owner = req.payload.id;

  return Promise.all([
    Task.find(query)
      .limit(Number(limit))
      .skip(Number(offset))
      .sort({ createdAt: "desc" })
      .exec(),
    Task.count(query).exec(),
  ]).then(function ([taskList, taskCount]) {
    const result = {
      data: taskList.map((task) => task.toJSONFor()),
      count: taskCount,
    };
    return res.json(result);
  });
});

// create task
router.post("/create", auth.required, function (req, res, next) {
  User.findById(req.payload.id)
    .then(function (user) {
      if (!user) {
        return res.sendStatus(401);
      }

      var task = new Task({name: req.body.task});

      task.owner = user;

      return task.save().then(function () {
        return res.json({ data: task.toJSONFor() });
      });
    })
    .catch(next);
});

// get task by id
router.get("/get/:id", auth.required, function (req, res, next) {
  if (req.task.owner._id.toString() !== req.payload.id.toString()) {
    return res.sendStatus(403);
  }
  return res.json({ data: req.task.toJSONFor() });
});

// update task
router.post("/update/:id", auth.required, function (req, res, next) {
  if (req.task.owner._id.toString() !== req.payload.id.toString()) {
    return res.sendStatus(403);
  }

  if (typeof req.body.task.name !== "undefined") {
    req.task.name = req.body.task.name;
  }

  if (typeof req.body.task.priority !== "undefined") {
    req.task.priority = req.body.task.priority;
  }

  if (typeof req.body.task.completed !== "undefined") {
    req.task.completed = req.body.task.completed;
  }

  if (typeof req.body.task.date !== "undefined") {
    req.task.date = req.body.task.date;
  }

  req.task
    .save()
    .then(function (task) {
      return res.json({ data: task.toJSONFor() });
    })
    .catch(next);
});

// delete task
router.delete("/delete/:id", auth.required, function (req, res, next) {
  if (req.task.owner._id.toString() !== req.payload.id.toString()) {
    return res.sendStatus(403);
  }

  return req.task.remove().then(function () {
    return res.sendStatus(204);
  });
});

module.exports = router;
