import mongoose from 'mongoose';


// defining the schema for the Dish

const dishesSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true
    },
    preparationsSteps: {
        type: [String],
        required: true
    },
    cookingTime: {
        type: Number,
        required: true
    },
    origin: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    }
});

// creating the 'Dish' model using the schema and allowing it to be used in other parts of the application
const Dish = mongoose.model('Dish', dishesSchema);
export default Dish;
