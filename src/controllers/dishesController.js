import dishesModel from "../models/dishesModel.js"


class DishesController{

    // controller class that defines methods (handlers) for processing requests
    // related to dishes (creating, updating, retrieving, and deleting dishes)
    // , executed when corresponding routes are accessed.
        
    async createDish(req, res){

        try{

            const {id, name, ingredients, preparationsSteps, cookingTime, origin, difficulty} = req.body
            
            if (!id || !name || !ingredients || !preparationsSteps || !cookingTime || !origin || !difficulty) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            if (typeof id !== 'string') {
                return res.status(400).json({ message: 'Id must be a string' });
            }

            // check if the dish with the same name already exists:
            const nameExistsResult = await dishesModel.getDishesByName(name)

            if (nameExistsResult){
                return res.status(409).json({ message: `Dish with the name '${name}' already exists`});
            }

            const dishObject = { _id: id, name, ingredients, preparationsSteps, cookingTime, origin, difficulty };
            const result = await dishesModel.createDish(dishObject)
            
            res.status(201).json({ message: 'Dish created successfully' });
            
        } catch (error){
            console.error('Error in createDish controller: ', error)
            res.status(500).json({error: 'Internal Server Error'})
        }

    }
    async getDishes(req, res){

        try{

            const result = await dishesModel.getDishes()

            // check if dishes retrieved is empty
            if (result.length === 0 ){
                return res.status(404).json({ message: 'No dishes found'});
            }

            res.status(200).json(result)
            

        } catch (error){
            console.error('Error in getDishes controller: ', error)
            res.status(500).json({error: 'Internal Server Error'})
        }

    }

    async getDishesByName(req, res){
        try{

            const {name} = req.params

            if (!name) {
                return res.status(400).json({ message: 'Dish name is required' });
            }

            const result = await dishesModel.getDishesByName(name)
        
            if (!result){
                return res.status(404).json({ message: `No dish found with the name: ${name}`});
            }

            res.status(200).json(result)
            

        } catch (error){
            console.error('Error in getDishesByName controller: ', error)
            res.status(500).json({error: 'Internal Server Error'})
        }
    }
    async updateDish(req, res){
        try{

            const {id} = req.params
            const {name, ingredients, preparationsSteps, cookingTime, origin, difficulty} = req.body

            if (!id) {
                return res.status(400).json({ message: 'Id is required' });
            }

            if (!name || !ingredients || !preparationsSteps || !cookingTime || !origin || !difficulty) {
                return res.status(400).json({ message: 'Missing required fields' });
            }


            const dishObject = { name, ingredients, preparationsSteps, cookingTime, origin, difficulty };

            const result = await dishesModel.updateDish(id, dishObject)

        
            if (!result){
                return res.status(404).json({ message: `No dish found with the id: ${id}`});
            }

            res.status(200).json({message: 'Dish updated succesfully'})
            

        } catch (error){
            console.error('Error in updateDish controller: ', error)
            res.status(500).json({error: 'Internal Server Error'})
        }
    }
    async deleteDish(req, res){
        try{

            const {id} = req.params

            if (!id) {
                return res.status(400).json({ message: 'Id is required' });
            }


            const result = await dishesModel.deleteDish(id)

            if (!result){
                return res.status(404).json({ message: `No dish found with the id: ${id}`});
                
            }
            
            res.status(200).json({message: `Dish with ${id} deleted succesfully`})
            

        } catch (error){
            console.error('Error in deleteDish controller: ', error)
            res.status(500).json({error: 'Internal Server Error'})
        }
    }


}
export default new DishesController()