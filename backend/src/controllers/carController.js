import CarRental from '../models/carRental.js';

// Create Booking Function

export const createBooking = async (req, res) => {
  try {
    const {
      userName, 
      userEmail, 
      carModel, 
      carType, 
      year,
      location, 
      imageURL,
      pickupDate, 
      returnDate, 
      pricePerDay, 
      status
    } = req.body;

    // Validate Required Fields

    if (!userName || !userEmail || !carModel || !location || !pickupDate || !returnDate || !pricePerDay) { 
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields.'
      });
    }

    // 2. Convert strings to Date objects

    const pickup = new Date(pickupDate);
    const returnD = new Date(returnDate);

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare only dates

    if (pickup < today) { 
      return res.status(400).json({ 
        success: false,
        message: 'Pickup date cannot be in the past'
      });
    }

    if (pickup >= returnD) {
      return res.status(400).json({
        success: false,
       message: 'Return date must be at least one day after pickup date'
      });
    }

// Creating new Booking 

    const booking = await CarRental.create({
      userName,
      userEmail,
      carModel,
      carType,
      year,
      location,
      imageURL,
      pickupDate: pickup,
      returnDate: returnD,
      pricePerDay,
      status: status || 'Pending'
    });

    res.status(201).json({
      success: true,
      message: 'Booking created succesfully !',
      data: booking
    });

  } catch (error) {
    console.log('Error creaing booking:', error);
    res.status(500).json({
      success: false,
      messaage: 'Server error while creating the booking',
      error: error.messaage
    });
  }
};

// Get Booking By ID

export const getBookingById = async (req, res) => {
  try {
    const { id } = req.params

    // Check if ID is valid MongoDB ObjectId

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(401).json({
        success: false,
        messaage: 'Invalid ID booking format'
      });
    }

    const booking = await CarRental.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        messaage: 'Booking not found'
      });
    }

    res.status(200).json({
      success: true,
      data: booking
    });

    } catch (error) {
      console.log('Error fetching booking:', error);
      res.status(500).json({
        success: false,
        messaage: 'Server error while fetching booking',
        error: error.messaage
      });
    }
};

// Update Booking

export const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    // Check if ID is Valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Booking ID Format'
      });
    }

    // Find the existing booking first to check dates or existence
    const existingBooking = await CarRental.findById(id);

    if (!existingBooking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    // If dates are being updated, validate them against each other
    if (updateData.pickupDate || updateData.returnDate) {
      const pickup = updateData.pickupDate ? new Date(updateData.pickupDate) : new Date(existingBooking.pickupDate);
      const returnD = updateData.returnDate ? new Date(updateData.returnDate) : new Date(existingBooking.returnDate);

      if (pickup >= returnD) {
        return res.status(400).json({
          success: false,
          message: 'Return date must be after pickup date'
        });
      }

      updateData.pickupDate = pickup;
      updateData.returnDate = returnD;
    }

// Find and update booking using CarRental
    const updatedBooking = await CarRental.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true, // Return the updated document
        runValidators: true // Ensure the update follows your Schema rules
      }
    );

    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      data: updatedBooking
    });

  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while updating booking',
      error: error.message
    });
  }
};

//  Get All Bookings

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await CarRental.find().sort({ createdAt: -1 });

    if (bookings.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No bookings found'
      });
    }

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      messaage: 'Error fetching bookings',
      error: error.messaage
    });
  }
};

// Delete Booking
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if ID is a valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid Booking ID Format'
      });
    }

    const deletedBooking = await CarRental.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully',
      data: deletedBooking
    });

  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while deleting booking',
      error: error.message
    });
  }
};

