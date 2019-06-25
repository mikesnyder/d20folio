var mongoose = require("mongoose");
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    unique: true
  },

  password: [
    {
      type: String,
    }
  ],

  characters: [
      {
          type: Schema.Type.ObjectId,
          ref:"Character"
      }
  ]
});

var User = mongoose.model("User", UserSchema);


module.exports = User;
