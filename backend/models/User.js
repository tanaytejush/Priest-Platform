import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['customer', 'priest', 'admin'], default: 'customer' },
    profilePicture: { type: String },
    bio: { type: String },
    specialization: { type: String }, // Priest-specific
    location: { type: String },
    pricePerSession: { type: Number }, // Priest-specific
    rating: { type: Number, default: 0 },
    availability: { type: [String], default: [] }, // Example: ["Monday", "Wednesday"]
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model('User', userSchema);