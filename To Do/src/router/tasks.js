const express = require("express");
const router = new express.Router();
const {model,schema} = require("../models/schemaModel")

// create new task
router.post("/work", async (req, res) => {
  try {
    // console.log('req',req.body);
    const task = new model(req.body);
    const creatTask = await task.save();
    res.status(201).send(creatTask);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
})

// delete task
router.delete("/work/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTask = await model.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    } else {
      res.send(deleteTask);
    }
  } catch (error) {
    res.status(500).send(error);
  }
})


// show all tasks
router.get("/work", async (req, res) => {
  try {
    const taskData = await model.find();
    res.send(taskData);
  } catch (error) {
    res.send(error);
  }
})

// show one task
router.get("/work/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const taskData = await model.findById(_id);
    console.log(taskData);
    if (!taskData) {
      return res.status(404).send();
    } else {
      res.send(taskData);
    }
  } catch (error) {
    res.status(500).send(error);
  }
})



// update task
router.patch("/work/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateTask = await model.findByIdAndUpdate(_id, req.body, { new: true });
    res.send(updateTask);
  } catch (error) {
    res.status(404).send(updateTask);
  }
})

module.exports = router;