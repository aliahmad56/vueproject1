<template>

        <HeaderMenu />
        <h2>Enter Your Details to add your Restaurant</h2>
        <form class="formstyle">
  
    <div class="custom">
      <input type="text" class="custom2" v-model="name" placeholder="Enter your Restaurant Name">
    </div>
  
    <div class="custom">
      <input type="text" class="custom2" v-model="location" placeholder="Enter your Location">
    </div>

    <div class="custom">
      <input type="text" class="custom2" v-model="number" placeholder="Enter your Phone Number">
    </div>
    
    <button class="btn btn primary custom3" v-on:click="AddingData">Add Restaurant</button>
    </form>
 
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import axios from 'axios'
export default
{
    name:'AddRestaurant',
        components:{
         HeaderMenu
        },
        
        data(){
            return{
             name:'',
             location:'',
             number:'',

            }
        },


    mounted()
    {
    let user=localStorage.getItem('user-info');
    if(!user)
    {
        this.$router.push({name:'SignUp'})
    }
    },
    methods:
    {
        async AddingData(e){
         e.preventDefault();
   
console.log('Hello')
     let result= await axios.post("http://localhost:3000/restaurant",{
        name:this.name,
        location:this.location,
        number:this.number,

      });

      console.log(result.status);
      if(result.status==201)
         {
            this.$router.push({name:'HomePage'});
         }



        }

    }

}
</script>

<style>

.custom{

margin-top: 20px;
}

.custom2{
 height: 40px;
   color: black;
   border: 0.5px solid black;
   text-align: center;
   width: 500px;
}
.formstyle{
    margin-top: 70px;
}

.custom3{
    width:150px;
    height: 50px;
    color: black;
}

</style>