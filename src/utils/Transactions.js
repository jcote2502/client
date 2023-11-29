import Axios from 'axios';

class Transactions{
    constructor(){
        this.transactions = {};
        this.transaction = {};
        this.product = {};
    }

    async getTransactions(uid){
        try{
            const response = await Axios.get('http://localhost:3004/db/transactions',{
                params:{
                    uid:uid
                }
            });
            this.transactions = response.data.transactions;
            return {status:true};
        }catch(error){
            console.log('Error Retrieving Transactions:', error);
            return {status:false,error:error.message};
        }
    }

    async addRefund(productID,userID,transID){
        try{
            await Axios.post('http://localhost:3004/db/addRefund',{
                uid:productID,
                pid:userID,
                tid:transID, 
            });
            return true;
        }catch(error){
            console.error('Error Adding Refund',error);
            return error;
        }
    }

    setTransaction(transaction){
        this.transaction=transaction;
    }
}

const transactions = new Transactions();
export default transactions;