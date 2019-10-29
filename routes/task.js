module.exports = app => {
    const Tasks = app.models.tasks;
    app.get("/tasks", (req, resp) => {
        Tasks.findAll({}, (tasks) => {
            resp.json({ tasks: tasks });
        });
    });
}