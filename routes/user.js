const express = require("express");
const router = express.Router();

const { insertUser, getAllUsers, login, updateUser, deleteUser } = require("../controllers/user");

router.get("/", async (req, res) => {
    try {
        const user = await getAllUsers(req.body);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await login(req.body);
        if (!user) return res.status(404).json({ message: "user not found" });
        if (user.password !== req.body.password) return res.status(403).json({ message: "Password is incorrect" });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const user = await insertUser(req.body);
        return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.put("/", async (req, res) => {
    try {
        const user = await updateUser(req.body);
        return res.status(200).json({ message: "User update successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

router.delete("/", async (req, res) => {
    try {
        const user = await deleteUser(req.body);
        return res.status(200).json({ message: "User delete successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = router;
