const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const {API_VERSION , IP_SERVER, PORT_DB} = require("./config");

const MONGO_URL = `mongodb://${IP_SERVER}:${PORT_DB}/local`;
console.log(MONGO_URL)

mongoose.set("useFindAndModify", false);

mongoose.connect(MONGO_URL , 
    {useNewUrlParser: true,
    useUnifiedTopology: true},
    (err, res) => {
        if(err){
            throw err;
        } else{
            console.log("Successful connection to the database");

            app.listen(PORT_SERVER, () => {
                console.log("###################");
                console.log("##### API REST ####");
                console.log("###################");
                console.log(`http://${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}`);
            })
        }
    });