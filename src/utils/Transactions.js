import Axios from 'axios';

class Transactions{
    constructor(){
        this.transactions = {};
        this.transaction = {};
        this.product = {};
    }

    async getTransactions(uid,sort_filter){
        if (!sort_filter){
            sort_filter='DESC'
        }
        try{
            const response = await Axios.get('http://localhost:3004/db/transactions',{
                params:{
                    uid:uid,
                    sort_filter:sort_filter
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
            return {status:true};
        }catch(error){
            console.error('Error Adding Refund',error);
            return {status:false,error:error.message};
        }
    }

    setTransaction(transaction){
        this.transaction=transaction;
    }
}

const transactions = new Transactions();
export default transactions;