import mongoose from "mongoose";

const BankSchema =  mongoose.Schema({
    vendorname:  {type : String, required:true, trim : true},
    accno: {type : Number, required:true},
    bankname:  {type : String, required:true, trim : true},
    addressfirst:  {type : String, required:true, trim : true},
    addresssecond:  {type : String, required:true, trim : true},
    city:  {type : String, required:true, trim : true},
    country:  {type : String, required:true, trim : true},
    zipcode:  {type : Number, required:true},

}, {timestamps :true})

export default mongoose.model('bank', BankSchema)