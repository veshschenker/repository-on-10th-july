const { Client } = require('pg');
const config = {
    user: "schenker",
    password: "vreni1980",
    host: "192.168.99.100",
    port: 5432,
    database: "cars_application"
}

const dbClient = new Client(config);

dbClient.connect().then(() => {
    console.log('connected to the dtabase')
}).catch(error => {
    console.log(error);
});

exports.getCars = async function () {
    const sql = 'select * from carstable';
    const result = await dbClient.query(sql);
    return result.rows;
}

exports.getCarById = async function (carid) {
    const sql = 'select * from carstable where carid =' + carid;
    const result = await dbClient.query(sql);
    if (result.rows.length == 0) {
        return undefined;
    }
    return result.rows[0];
}

exports.addCar = async function (newcar) {
    const sql = 'insert into carstable(name,year) values($1,$2)';
    const values = [
        newcar.name,
        newcar.year
    ];
    const result = await dbClient.query(sql, values);
    return result.rowCount;
}