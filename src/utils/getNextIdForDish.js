export const getNextIdForDish = async () => {
    try {
        // Make a GET request to /api/dishes to fetch all dishes
        const response = await fetch('/api/dishes');
        
        if (!response.ok) {
            throw new Error('Failed to fetch dishes');
        }
        
        const dishes = await response.json();
        
        // Extract the ids and convert them to numbers for comparison
        const ids = dishes.map(dish => parseInt(dish._id));
        
        // Find the largest id
        const largestId = Math.max(...ids);
        
        // Generate the next id by adding 1
        const nextId = largestId + 1;
        
        // Return the next id as a string
        return nextId.toString();
    } catch (error) {
        console.error("Error fetching dishes or calculating next ID:", error);
        return null; // or handle the error accordingly
    }
}
