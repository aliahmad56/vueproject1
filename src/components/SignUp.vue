<template>
    <div>
    <form>
    <!-- <h2>{{ abc }}</h2> -->
    <img alt="Vue logo" class="logoimage" src="./../assets/restaurantlogo.jpg"/>

    <div class="custom">
      <input type="text" class="custom2" v-model="name" placeholder="Enter your name">
    </div>
  
    <div class="custom">
      <input type="email" class="custom2" v-model="email" placeholder="Enter your email">
    </div>

    <div class="custom">
      <input type="password" class="custom2" v-model="password" placeholder="Enter your Password">
    </div>

    <button class="btn btn-primary custom3" v-on:click="submitdata">SingUp</button><br><br>
    <p>
      <router-link to="/sign-in">LogIn</router-link>
    </p>

     
</form>
</div>
</template>

<script>
import axios from 'axios'


export default{
  

        name:'SignUp',
//         props:{
//   abc: String,
// },
data()
{
    return{
  
    'name' : '',
    'email': '',
    'password': '',
   
}

},

methods:
{

   async submitdata(e)
    {
     e.preventDefault();
      let result= await axios.post("http://localhost:3000/users",
      {
          name:this.name,
          email:this.email,
          password:this.password
      }); 

      console.log(result);
      if(result.status==201)
      {
        // console.log(typeof(result.status));
   
       localStorage.setItem("user-info",JSON.stringify(result.data));
        this.$router.push({name:'HomePage'})

  
      }

    },

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
</style>
