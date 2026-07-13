const validTask = async (req, res, next)=>{
    try {
        const {title, description, status} = req.body;
        const errors = []

        if (!title) {
            errors.push("the title field is required")
        };

        if(!description ) {
            errors.push("description is required")
        } else if (description && description.length < 50 ) {
            errors.push("must be at least more than 50 character")
        };

        if (!status) {
            errors.push("the status must be within pending, inProgress or completed")
            
        };

        if (errors.length > 0) {
            return res.status(400).json({errors})
        }

        next();
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = validTask