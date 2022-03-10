const express = require("express");
const app = express();
const routes = require("./routes/index");

const pool = require("./db/db"); //import file from db folder

// connect with pg database
pool.connect(function(err) {
	if (err) throw err;
	console.log("connected to postgres db..");
});

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/", routes);

const PORT=3001;



app.listen(PORT, () => {

	console.log(`This users app listening at : http://localhost:${PORT}`);

	

});
