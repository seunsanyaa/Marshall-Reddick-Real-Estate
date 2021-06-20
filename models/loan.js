const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EntitySchema = new Schema({


    Entities:{
        type:String,
        enum:["Individual", "LLC", "Corporation","Retirement Account"]

    },

    W_Nine_Signed:{
        type:Boolean
}

});


const TransactionSchema = new Schema({

    TransactionType: {
        type:String,
        enum: ["Origination","Sales"],
        default:"Origination"
    },
    Lenders: [{
        Email:{
            type: String

        },
       PhoneNumber:{
            type: String
        },
        Address:{
            type: String
        },
        DisclaimerSigned:{
            type:Boolean
        },

        Entities:EntitySchema,
        hasSignedAllDocuments:{
            type:Boolean
        }

        },


    ]


});





const loanSchema = new Schema({


   Amount: {
       type:Number
    },
    InterestRate:{
       type:Number


    },
    Status: {
       type:String,
        enum: ["Draft","Available", "Funded", "Complete"]
    },
    Transaction:[TransactionSchema]

});






const Loan=mongoose.model('loan',loanSchema);

module.exports=Loan;