import { userDb } from "../banco/banco"

const getUserId = (req, res) => {
    const id = req.params
    const user = userDb