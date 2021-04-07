const log = require('./db/log.json');
const date = new Date()

const dataLog = ( name ) => {
  fs.readFile(log, "utf-8", (err, data) => {
    if (err) { console.log(err);
    } else {
      const log_date = JSON.parse(data);
      log_date.push ({
        time: date,
        product_name: name,
      });
      console.log(log_date);
      fs.writeFile(log, JSON.stringify(log_date, null, 4 ),(err) => {if (err) throw err; });
    } 
  });
};

module.exports={
    dataLog
}