import Axios from 'axios';


class User{
    constructor(){
        this.user_ID = null;
        this.user = {};
    }
    async login(email,password){
        try {
            const response = await Axios.get('http://localhost:3004/db/authentication',{
              params:{
                email:email,
                password:password
              }
            });
            const uid = response.data.userId;
            const user = await Axios.get('http://localhost:3004/db/user',{
                params:{
                    uid:uid
                }
            });
            this.user_ID = uid;
            this.user = user.data.user;
            console.log(this.user);
            return {status:true};
    }catch(error){
        console.log('Error Logging In:',error);
        return {status:false,error:error.message};
    }}
    async createUser(email,fname,lname,password){
        try{
            fname = fname.charAt(0).toUpperCase()+fname.slice(1);
            lname = lname.charAt(0).toUpperCase()+lname.slice(1);
            console.log(email,fname,lname,password);
            const login = await Axios.post('http://localhost:3004/db/registeruser', {
                email: email,
                fname: fname,
                lname: lname,
                password: password
              });
            const uid = login.data.uid.user_ID;
            const user = await Axios.get('http://localhost:3004/db/user',{
                params:{
                    uid:uid
                }
            });
            this.user_ID = uid;
            this.user = user.data.user;
            return {status:true};
        }catch (error){
            console.log("Error Creating User:", error);
            return {status:false,error:error.message};
        }
    }

    async updateUser(address,team){
        try{
            Axios.post('http://localhost:3004/db/updateProfile',{
                uid:this.user_ID,
                team:team,
                address:address
            });
            this.user.team = team;
            this.user.pr_address = address;
            return {status:true};
        }catch(error){
            console.error('Error Updating User',error);
            return {status:false,error:error.message};
        }
    }

    getUserID(){
        return this.user_ID;
    }
    getUser(){
        return this.user;
    }
}

const user = new User();

export default user;