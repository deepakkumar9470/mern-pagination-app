import Bank from '../models/Bank.js'


export const createBank = async(req,res) =>{
    const bank = req.body;

    const newBank = new Bank(bank);
    try{
        await newBank.save();
        res.status(201).json(newBank);
    } catch (error){
        res.status(409).json({ message: error.message});     
    }

}


export const getBanks = async (req,res) =>{
    const page = parseInt(req.query.page) || 1;
    const perPage = req.query.perPage || 5;
    
    try{
        const count = await Bank.countDocuments({})
        const banks = await Bank.find().sort({vendorname: 1, bankname :1})
        .skip((page - 1) * parseInt(perPage))
        .limit(parseInt(perPage))

        res.status(200).json({
            banks, 
            count
        });
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

export const getBankById = async (req,res) =>{
    try{
        const bank = await Bank.findById(req.params.id);
        res.status(200).json(bank);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
}

export const editBank =async (req,res) =>{
    try {
        const neweditbank = await Bank.findByIdAndUpdate(req.params.id, req.body, {new : true})
        res.status(201).json(neweditbank);
    } catch (error) {
        res.status(409).json({ message: error.message});  
    }
    
}
export const deleteBank =async (req,res) =>{
    try {
         await Bank.findByIdAndDelete(req.params.id)
        res.status(201).json('Bank has been deleted!');
    } catch (error) {
        res.status(409).json({ message: error.message}); 
    }
}