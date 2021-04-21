const express = require("express");
const { validateAction, validateActionId } = require("../middleware/middleware");
const router = express.Router();
const actions = require("./actions-model");

router.get("/actions", async (req, res, next) => {
    await actions.get()
        .then((actions) => {
            res.status(200).json(actions)
        })
        .catch((error) => {
            next(error)
        })
})

router.get("/actions/:id", validateActionId(), async (req, res, next) => {
    res.json(req.action)
})

router.post("/actions", validateAction(), async (req, res, next) => {
    await actions.insert(req.body)
        .then((action) => {
            res.status(200).json(action)
        })
        .catch((error) => {
            next(error)
        })
})

router.put("/actions/:id", validateActionId(), async (req, res, next) => {
    await actions.update(req.params.id)
    .then((action) => {
        res.status(201).json(action)
    })
    .catch((error) => {
        next(error)
    })
})

router.delete("/actions/:id", validateActionId(), async (req, res, next) => {
    await actions.delete(req.params.id)
        .then((action) => {
            res.status(202).json(action)
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router;