const { Schema, model } = require("mongoose");

//interaction 5

const moviesSchema = new Schema(
  {
    title: String,
    genre: String,
    plot: String,
    cast: [{ type: Schema.Types.ObjectId, ref: "Celebrity" }],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Movie", moviesSchema);
