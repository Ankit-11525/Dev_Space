class ActivateController{
    async activate(req,res) {
        //Activation logic
        res.json({message:'OK'});
    }
}

module.exports = new ActivateController();