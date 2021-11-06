const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// mongoose.set("useFindAndModify", false);

const place = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  COVID_status: {
    type: String,
  },
});

const Place = mongoose.model("place", place);
module.exports = Place;
