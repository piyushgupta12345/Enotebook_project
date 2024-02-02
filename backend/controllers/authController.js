import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config.js'

const register = async (req, res) => {

    try {
        // fetch data from req ki body
        const { name, email, password } = req.body;

        // validations
        // user exist
        const checkUserExist = await User.findOne({ email });

        if (checkUserExist) {
            return res.status(400).json(
                {
                    success: false,
                    msg: "User already exist !!"
                }
            )
        }

        // @ valid email checkIn
        if (!email.includes("@")) {
            return res.status(400).json(
                {
                    success: false,
                    msg: "Please enter the valid email !!"
                }
            )
        }

        // all feild required 
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                msg: "All feilds is required !!"
            })
        }

        // genrate salt
        const salt = await bcrypt.genSalt(10);

        // hashPassword
        const hashPassword = await bcrypt.hash(password, salt)

        // user create or registration
        const userRegistration = await User.create({ name, email, password: hashPassword })

        res.status(201).json(
            {
                success: true,
                msg: "User registration successfully !!",
                data: userRegistration
            }
        )

    } catch (error) {
        return res.status(401).json(
            {
                success: false,
                msg: "User registration failed !!",
                err: error
            }
        )
    }
}

const login = async (req, res) => {

    try {
        // fetch data from req ki body
        const { email, password } = req.body;

        // validations
        // all feild required 
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                msg: "All feilds is required !!"
            })
        }

        // @ valid email checkIn
        if (!email.includes("@")) {
            return res.status(400).json(
                {
                    success: false,
                    msg: "Please enter the valid email !!"
                }
            )
        }

        // user exist
        const user = await User.findOne({ email });
        console.log(user);

        if (!user) {
            return res.status(400).json(
                {
                    success: false,
                    msg: "User not found !!"
                }
            )
        }

        // password match
        const matchPassword = await bcrypt.compare(password, user.password);

        if (!matchPassword) {
            return res.status(400).json(
                {
                    success: false,
                    msg: "Your password not match !!"
                }
            )
        } else {
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
                expiresIn: '2d'
            })

            res.status(201).json({
                token: token })
        }

    } catch (error) {
        console.log(error);
        return res.status(401).json(
            {
                success: false,
                msg: "internal server error !!",
                err: error
            }
        )
    }
}

export {register, login} ;