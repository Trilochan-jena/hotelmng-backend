const {
    createUser,
    getAllUser,
    getUserById,
    userUpdate,
    deleteUser,
} = require("../controllers/user.controllers");

 

module.exports = app => {
    app.post("/api/create_user", createUser);
    app.get("/api/get_all_user", getAllUser);
    app.post("/api/get_user_by_id", getUserById);
    app.put("/api/user_update", userUpdate);
    app.delete("/api/delete_user", deleteUser);
 }