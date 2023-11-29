import Axios from 'axios';

class Refund{
    constructor(){
        this.refunds = [];
        this.refund = {};
    }
    
    async getRefunds(uid){
        try{
            const response = Axios.get('http://localhost:3004/db/refund',{
                params:{
                    uid:uid
                }
            });
            this.refunds = response.data.refunds;
            return {status:true};
        }catch(error){
            console.error('Error getting refunds:',error);
            return {status:false,error:error.message};
        }
    }


    setRefund(refund){
        this.refund = refund;
    }
}

const refund = new Refund();
export default refund;