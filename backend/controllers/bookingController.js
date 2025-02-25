import Booking from '../models/Booking.js';

// ✅ Create Booking
export const createBooking = async (req, res) => {
    try {
        const { priestId, date } = req.body;

        const existingBooking = await Booking.findOne({ priest: priestId, date });
        if (existingBooking) {
            return res.status(400).json({ message: 'Priest already booked for this date' });
        }

        const booking = await Booking.create({ user: req.user._id, priest: priestId, date });

        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// ✅ Get User Bookings
export const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).populate('priest', 'name specialization');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};