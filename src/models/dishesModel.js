import { client } from "../db/connect.js";

class DishesModel{

    async createDish(dishObject){

        try{
            const db = client.db("lab1db");
            const dishesCollection = db.collection("dish");
    
            const result = await dishesCollection.insertOne(dishObject)
    
            return result
        } catch(error){
            console.error('Error in createDish model: ', error);
        }
        
    }
    async getDishes(){

        try{
            const db = client.db("lab1db");
            const dishesCollection = db.collection("dish");
    
            const result = await dishesCollection.find({}).toArray()
            return result
        } catch(error){
            console.error('Error in getDishes model: ', error);
        }
        
    }
    async getDishesByName(dishName){

        try{
            const db = client.db("lab1db");
            const dishesCollection = db.collection("dish");
    
            const result = await dishesCollection.findOne({name: dishName})

            return result
        } catch(error){
            console.error('Error in getDishesByName model: ', error);
        }
        
    }
    async updateDish(id, dishObject){

        try{
            const db = client.db("lab1db");
            const dishesCollection = db.collection("dish");
    
            const result = await dishesCollection.updateOne(
                {_id: id},
                { $set: dishObject}
            )

            return result.matchedCount
        } catch(error){
            console.error('Error in updateDish model: ', error);
        }
        
    }
    async deleteDish(id){

        try{
            const db = client.db("lab1db");
            const dishesCollection = db.collection("dish");

            const result = await dishesCollection.deleteOne({_id: id})

            return result.deletedCount
    
            
        } catch(error){
            console.error('Error in deleteDish model: ', error);
        }
        
    }
    
}


export default new DishesModel()