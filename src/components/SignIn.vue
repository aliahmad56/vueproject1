<template>
    <div>
    <form>
    <h2>Welcome to SignIn Page</h2>
    <img alt="Vue logo" class="logoimage" src="./../assets/restaurantlogo.jpg"/>

    <div class="custom">
      <input type="text" class="custom2" v-model="record.email" placeholder="Enter your email">
    </div>

    <div class="custom">
      <input type="password" class="custom2" v-model="record.password" placeholder="Enter your Password">
    </div>

    <button class="btn btn-primary custom44" v-on:click="SignIndata">LogIn</button><br><br>
    <p>
      <router-link to="/sign-up">Signup</router-link>
    </p>
     
</form>
</div>
</template>

<script>
import axios from 'axios';
export default{
    
        name:'SignIn',

data()
{
    return{
    record:{

   
    'email': '',
    'password': '',
    },
}
},

methods:
{
    async SignIndata(e)
    {
      e.preventDefault();
     console.log(this.record.email,this.record.password);
    
          let logindata = await axios.get(
            `http://localhost:3000/users?email=${this.record.email}&password=${this.record.password}`
            )

            console.log(logindata);
            if(logindata.status==200 && logindata.data.length>0)
            {
              localStorage.setItem("user-info",JSON.stringify(logindata.data[0]))
              this.$router.push({name:'HomePage'})
            }
    
  }
  
},
mounted()
    {
    let user=localStorage.getItem('user-info');
    if(user)
    {
        this.$router.push({name:'HomePage'})
    }
    }
}

</script>

<style>
.logoimage
{
  width: 100px;
    height: 80px;
    border-radius: 20px;
}

.custom{

 margin-top: 20px;
}

.custom2{
  height: 30px;

    color: black;
    border: 0.5px solid black;
    text-align: center;
    width: 200px;
}

.custom3{
  margin-top: 20px;
    height: 30px;
    width: 80px;
    background: darkgrey;
   border-radius: 5px;
    color: white;
    border: 0.5px solid black;
}

.custom44{
  margin-top: 15px;
}
</style>
<!-- console.log(logindata.data,logindata.data.length); -->
