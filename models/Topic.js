const mongoose = require('mongoose');

const TopicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subtopics: [
    {
      name: String,
      youtubeLink: String,
      leetcodeLink: String,
      articleLink: String,
      level: { type: String, enum: ['Easy', 'Medium', 'Tough'] },
    },
  ],
});

module.exports = mongoose.model('Topic', TopicSchema);
