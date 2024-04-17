// Import Mongoose
const mongoose = require('mongoose');

const dbConfig = require('../config/db');

mongoose.connect(dbConfig.url, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

// Define notice schema
const NoticeSchema = mongoose.Schema({
    name: {
      type: String,
      required: true, // Set to true if notice field is required
    }
});

// Create Notice model
const Notice = mongoose.model("Notice", NoticeSchema);

// Export Notice model
module.exports = Notice;
