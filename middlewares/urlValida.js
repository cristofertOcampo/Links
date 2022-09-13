
const { error } = require("console");
const { URL } = require("url");

const urlValidar = (req, res, next) => {
    try {
        const { origin } = req.body;
        const urlFrontend = new URL(origin);
        if (urlFrontend.origin !== "null") {
            return next();
        }else{
            throw new Error("no validad 😯")
        }
    } catch (error) {
        // console.log(error);
        // return res.redirect("/");
        return res.send('url no validad')
    }
};

module.exports = urlValidar;