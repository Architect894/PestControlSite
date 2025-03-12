const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    companyName: { type: String, required: false }, // Only for Commercial users
    password: { type: String, required: true }, // You can use bcrypt to hash passwords
});

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
