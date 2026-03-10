import { Router } from 'express';
import { createBooking, getBookingById, updateBooking, getAllBookings, deleteBooking } from '../controllers/carController.js';

const router = Router();

// Create a new booking
router.post('/', createBooking);

// Get booking by ID
router.get('/:id', getBookingById);

// Update booking by ID
router.put('/:id', updateBooking);

// Get All Bookings
router.get('/', getAllBookings);

// Delete booking by ID
router.delete('/:id', deleteBooking);

export default router;