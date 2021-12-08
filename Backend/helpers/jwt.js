const jwt = require("jsonwebtoken");
const secret = "mi_llave"

const generarJwt = (uid, nombre) => {
    return new Promise((resolve, reject) =>{
        const payload = {
            uid,
            nombre
        }
        jwt.sign(payload, secret, {expiresIn: "2h"}, 
            (err, token) => {
                if (err) {
                    console.log (err)
                    reject("No se pudo generar el Token")
                }
                resolve(token)
            }
        )
    })
}

/* module.exports = {generarJwt}; */

