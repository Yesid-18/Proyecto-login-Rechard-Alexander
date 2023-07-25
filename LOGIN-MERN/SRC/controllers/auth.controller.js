
import User from '../models/user.models.js'



export const register = (req, res) => {
    const {email, password, username } = req.body;

    console.log(email, password, username);
    res.send('Registrado');
};
export const login = (req, res) => res.send("login");