import Axios from 'axios';

class Product{
    constructor(){
        this.products = [];
        this.product = {};
    }

    async getJerseys(){
        try {
            const response = await Axios.get('http://localhost:3004/db/jerseys');
            this.products = response.data.product;
            return {status:true};
        } catch (error) {
            console.error('Error Fetching products:', error);
            return {status:false,error:error.message};
        }
    }

    async searchPlayer(fname,lname){
        try {
            const response = await Axios.get('http://localhost:3004/db/player',{
                params:{
                    fname: fname,
                    lname: lname
                }
            });
            this.products = response.data.products;
            return {status:true};
        }catch(error){
            console.error('Error Fetching products:',error);
            return {status:false,error:error.message};
        }
    }

    async searchTeam(team){
        try{
            const response = await Axios.get('http://localhost:3004/db/team',{
                params:{
                    team:team
                }
            });
            this.products = response.data.products;
            return {status:true};
        }catch(error){
            console.error('Error Fetching Products',error);
            return {status:false,error:error.message};
        }
    }

    setProduct (product){
        this.product = product;
    }
}

const product = new Product();
export default product;