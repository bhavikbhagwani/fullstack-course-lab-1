import Dish from "../schemas/dishesSchema.js";

class DishesModel{

    async createDish(dishObject){

        try{
            const newDish = new Dish(dishObject)
            const result = await newDish.save()
            return result
            
        } catch(error){
            console.error('Error in createDish model: ', error);
        }
        
    }
    async getDishes(){
        
        try{
            
            const result = await Dish.find({})
            return result

        } catch(error){
            console.error('Error in getDishes model: ', error);
        }
        
    }
    async getDishesByName(dishName){

        try{
            
    
            const result = await Dish.findOne({name: dishName})
            return result

        } catch(error){
            console.error('Error in getDishesByName model: ', error);
        }
        
    }
    async updateDish(id, dishObject){

        try{
    
            const result = await Dish.findByIdAndUpdate(id, dishObject, {new: true})
            return result

        } catch(error){
            console.error('Error in updateDish model: ', error);
        }
        
    }
    async deleteDish(id){

        try{

            const result = await Dish.findOneAndDelete({_id: id})
            return result
    
            
        } catch(error){
            console.error('Error in deleteDish model: ', error);
        }
        
    }
    
}


export default new DishesModel()