import User from '../models/User.js';

// ✅ Get All Priests
export const getAllPriests = async (req, res) => {
    try {
        const priests = await User.find({ role: 'priest' }).select('-password');
        res.json(priests);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Get Single Priest by ID
export const getPriestById = async (req, res) => {
    try {
        const priest = await User.findById(req.params.id).select('-password');
        if (!priest || priest.role !== 'priest') {
            return res.status(404).json({ message: 'Priest not found' });
        }
        res.json(priest);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Update Priest Profile (Only for priests)
export const updatePriestProfile = async (req, res) => {
    try {
        const { bio, specialization, location, pricePerSession, availability } = req.body;
        if (req.user.role !== 'priest') {
            return res.status(403).json({ message: 'Only priests can update their profile' });
        }

        const priest = await User.findById(req.user._id);
        if (!priest) return res.status(404).json({ message: 'User not found' });

        priest.bio = bio || priest.bio;
        priest.specialization = specialization || priest.specialization;
        priest.location = location || priest.location;
        priest.pricePerSession = pricePerSession || priest.pricePerSession;
        priest.availability = availability || priest.availability;

        await priest.save();
        res.json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};