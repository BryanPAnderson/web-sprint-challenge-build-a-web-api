const projects = require("../projects/projects-model");
const actions = require("../actions/actions-model");

function validateProjectId() {
    return (req, res, next) => {
        projects.get(req.params.id)
            .then((project) => {
                if (project) {
                    req.project = project
                    next()
                } else {
                    res.status(404).json({
                        message: "Project not found"
                    })
                }
            })
            .catch((error) => {
                console.log(error)
                res.status(500).json({
                    message: "Error retrieving project"
                })
            })
    }
}

function validateProject() {
    return (req, res, next) => {
        if (!req.body.name || !req.body.description) {
            res.status(400).json({
                message: "Must include project name and description"
            })
        }
        next()
    }
}

function validateActionId() {
    return (req, res, next) => {
    actions.get(req.params.id) 
        .then((action) => {
            if (action) {
                req.action = action
                next()
            } else {
                res.status(404).json({
                    message: "Action not found"
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error retrieving project"
            })
        })
    
    }
}

function validateAction() {
    return (req, res, next) => {
        if (!req.body.description || !req.body.notes) {
            res.status(400).json({
                message: "Must include discription and notes"
            })
        }
    }
}

module.exports = {
    validateProjectId,
    validateProject, 
    validateActionId, 
    validateAction
};
