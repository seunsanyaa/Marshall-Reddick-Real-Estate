const Loan = require("../../models/loan");


exports.loantransactions=  (req, res) => {

    const loanslimit=req.params.limit
    const order=req.params.order

 const result=   Loan.find(



        {

            //
            // $and: [
            //     { $or: [ {   Status: "Available"}, {  Status: "Funded" } ] },
            //     { $or: [ {TransactionType:"Origination"}, { TransactionType:"Sales" } ] }
            // ]
            //

            Status:"Available"

        }



    ).limit(2).sort(order)



if (result){
result.find({

        $and: [
            {DisclaimerSigned: true} ,
            {W_Nine_Signed:true}
        ]



    }, function(err, result) {
      if (err) throw err;


      res.json(result);



  }
)




    //
    // if(aresult) {
    //     let hasSignedAllDocuments = {hasSignedAllDocuments: true};
    //
    //     aresult.update(hasSignedAllDocuments, function (err, records) {
    //         console.log("Record added as " + records[0]._id);
    //     });
    //     result.save();
    //     res.status(200).send(aresult);
    //
    // }










    }










    //
    // if (!entry){
    //     console.log('no entries');
    //     res.status(200).json({
    //       message:'no entries',
    //         success:true
    //     })
    // }
    //
    // else {
    //     // const entry = Entry.find({
    //     //
    //     //     email: process.env.EMAIL,
    //     //     title:title,
    //     //
    //     //     notes:notes,
    //     //     date_time:date_time,
    //     //     moods:moods
    //     // });
    //     //
    //     console.log('there are entries');
    //     res.status(200).json({
    //         message:'there are entries',
    //         success:true
    //     })
    //
    //
    // }



};


