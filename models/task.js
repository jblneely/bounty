var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    imageURL: String,
    credit: Number,
    deadline: Date,
    activeUser: Number
});

TaskSchema.set('toJSON', {
    transform: function(doc, ret, options) {
        var returnJson = {
            id: ret._id,
            name: ret.name,
            description: ret.description,
            imageURL: ret.imageURL,
            credit: ret.credit,
            deadline: ret.deadline,
            activeUser: ret.activeUser
        };
        return returnJson;
    }
});




module.exports = mongoose.model('Task', TaskSchema);
