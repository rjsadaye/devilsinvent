const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection

//var input;
const contractInsurance = (async function(){
    try{
        this.bizNetworkConnection = new BusinessNetworkConnection();
        let connection = await this.bizNetworkConnection.connect('admin@iot');
        //this.input=input
        const args = process.argv.slice(2);
        const input_string = args.shift();
	const input =JSON.parse(input_string);
        /*const pIdSeller = args.shift()
        const realEstateId = args.shift()
        const loanId = args.shift()
        const realEstateAgentId = args.shift()
        const notaryId = args.shift()
        const insuranceId = args.shift()
        */
        let transaction = {
            "$class": "org.acme.iot.addsdata"
        }
        transaction.ID=input.ID;
		transaction.time=input.timestamp;
		transaction.switch_state=input.switch_state;
		transaction.credit_left=input.credit_left

        let serializer = connection.getSerializer();
        let resource = serializer.fromJSON(transaction);
        await this.bizNetworkConnection.submitTransaction(resource);
        console.log('Transaction Completed!');
        process.exit();
    }catch( err ){
        console.log(err);
        process.exit();
    }
})()

module.exports = contractInsurance
