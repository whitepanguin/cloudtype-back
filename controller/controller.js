import User from "../schemas/user.js";

const main = (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8" });
    res.send("<h1>Welcome Express!</h1>");
}

const test = async (req, res) => {
    const users = await User.find()
    console.log(users)
    res.json(users)
}

export {test, main}
