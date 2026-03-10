import mongoose from 'mongoose';

const carRentalSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userEmail: { type: String, required: true },
  carModel: { type: String, required: true },
  carType: { type: String, required: true },
  year: { type: Number, required: true },
  location: { type: String, required: true },
  imageURL: { type: String, required: true },
  pickupDate: { type: Date, required: true },
  returnDate: { type: Date, required: true },
  pricePerDay: { type: Number, required: true },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Cancelled'],
    default: 'Pending'
  }
}, { timestamps: true })

const CarRental = mongoose.model('CarRental', carRentalSchema);

export default CarRental;