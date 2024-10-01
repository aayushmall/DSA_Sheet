const Topic = require('../models/Topic');
const User = require('../models/User');

exports.getTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
  
    res.json(topics);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateProgress = async (req, res) => {
  const { subtopicId } = req.body;
  try {
    let user = await User.findById(req.user.id);

    if (!user.progress.includes(subtopicId)) {
      user.progress.push(subtopicId);
      await user.save();
    }

    res.json({ message: 'Subtopic marked as completed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
