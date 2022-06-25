dir = __dirname
module.exports = {
    port: process.env.port || 5000,
    mongo:'mongodb://localhost/dynamic_E_com',
    style:`${dir}\\Warehouse\\Styles`,
    script:`${dir}\\Warehouse\\Script`,
    image:`${dir}\\Warehouse\\Image`,
}