const { Thought, User } = require('../models');

module.exports = {
    // get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // get single user by its _id and populated thought and friend data
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .populate("thoughts")
                .populate("friends");
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // create user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // update user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                req.body,
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // delete user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            // remove associated thoughts
            await Thought.deleteMany({ username: user.username });
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // add friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    // delete friend
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }   
};
