import Axios from 'axios';

class Refund{
    constructor(){
        this.refunds = [];
    }
    
    async getRefunds(uid){
        try{
            const response = await Axios.get('http://localhost:3004/db/refund',{
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

    async postRefund(uid,pid,tid){
        try{
            await Axios.post('http://localhost:3004/db/addRefund',{
                uid:uid,
                pid:pid,
                tid:tid
            });
            return{status:true};
        }catch(error){
            console.error('Error Posting Refund:',error);
            return {status:false,error:error.message};
        }
    }
}

const refund = new Refund();
export default refund;