import Dish from "../schemas/dishesSchema.js";

class DishesModel{

    // dishModel class that contains methods that interact with the database to
    // perform CRUD operations on the 'Dish' collection

    async createDish(dishObject){

        try{
            const newDish = new Dish(dishObject) // create a new Dish instance
            const result = await newDish.save()
            return result
            
        } catch(error){
            console.error('Error in createDish model: ', error);
        }
        
    }
    async getDishes(){
        
        try{
            
            const result = await Dish.find({}) // fetch all dishes ({} means no specific criteria)
            return result // returns a list of dishes

        } catch(error){
            console.error('Error in getDishes model: ', error);
        }
        
    }
    async getDishesByName(dishName){

        try{
        
            const result = await Dish.findOne({name: dishName}) // fetch that ONE dish with a specific dishName, if not found get null
            return result

        } catch(error){
            console.error('Error in getDishesByName model: ', error);
        }
        
    }
    async updateDish(id, dishObject){

        try{
    
            const result = await Dish.findByIdAndUpdate(id, dishObject, {new: true}) // update dish and return the new updated dish
            return result

        } catch(error){
            console.error('Error in updateDish model: ', error);
        }
        
    }
    async deleteDish(id){

        try{

            const result = await Dish.findOneAndDelete({_id: id}) // delete ONE dish with a specific id
            return result
    
            
        } catch(error){
            console.error('Error in deleteDish model: ', error);
        }
        
    }
    
}


export default new DishesModel()