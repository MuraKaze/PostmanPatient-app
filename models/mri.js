const mongoose = require('mongoose');

const MRISchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please Add a Title'],
        unique: true,
        trim: true,
        maxlength: [40, "Limit of Title Reached, Max 40 Characters"]
    },
    link:{
        type: String,
        required: [true, 'Please Enter Content'],
        maxlength: [200, 'Limit of Description Reached, 200 characters Allowed']
    }
})

module.exports = mongoose.models.MRI || mongoose.model('MRI', MRISchema);