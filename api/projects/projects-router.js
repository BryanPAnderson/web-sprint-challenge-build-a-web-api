const express = require("express");
const { validateProject, validateProjectId } = require("../middleware/middleware");
const router = express.Router();
const projects = require("./projects-model");

router.get("/projects", async (req, res, next) => {
    await projects.get()
    .then((projects) => {
        res.status(200).json(projects)
    })
    .catch((error) => {
        next(error)
    })
});

router.get("/projects/:id", validateProjectId(), async (req, res) => {
    res.json(project)
});

router.post("/projects", validateProject, async (req, res, next) => {
    await projects.insert(req.body)
        .then((project) => {
            res.status(201).json(project)
        })
        .catch((error) => {
            next(error)
        })
});

router.put("/projects/:id", async (req, res, next) => {
    await projects.update(req.params.id)
        .then((project) => {
            res.status(200).json(project)
        })
        .catch((error) => {
            next(error)
        })
})

router.delete("/projects/:id", async (req, res, next) => {
    await projects.remove(req.params.id) 
        .then((project) => {
            res.status(202).json(project)
        })
        .catch((error) => {
            next(error)
        })
})

router.get("/projects/:id/actions", validateProjectId(), async (req, res, next) => {
    await projects.getProjectsActions(req.body)
        .then((actions) => {
            res.status(200).json(actions)
        })
        .catch((error) => {
            next(error)
        })
})

module.exports = router;