<template>
    
        <HeaderMenu />
        <form class="formstyle">
  
  <div class="custom">
    <input type="text" class="custom2" v-model="restaurant.name" placeholder="Enter your Restaurant Name">
  </div>

  <div class="custom">
    <input type="text" class="custom2" v-model="restaurant.location" placeholder="Enter your Location">
  </div>

  <div class="custom">
    <input type="text" class="custom2" v-model="restaurant.number" placeholder="Enter your Phone Number">
  </div>
  
  <button class="btn btn-primary custom3" v-on:click="UpdateData">Update Restaurant</button><br><br>
  </form>
 
</template>

<script>
import HeaderMenu from './HeaderMenu.vue'
import axios from 'axios'
export default
{
    name:'UpdateRestaurant',
        components:{
         HeaderMenu
        },
      
          data(){
            return{
                value: 'sno',
               restaurant:[],
                }
          },
       
     async mounted()
    {
    let user=localStorage.getItem('user-info');
    if(!user)
    {
        this.$router.push({name:'SignUp'})
    }

    let result= await axios.get('http://localhost:3000/restaurant/'+this.$route.params.id);
     console.log(result);
     this.restaurant=result.data;
    },
 

    methods:{

     async UpdateData(e)
      {
        e.preventDefault();
     

       let result=  await axios.put('http://localhost:3000/restaurant/'+this.$route.params.id,
       {
        name:this.restaurant.name,
        location:this.restaurant.location,
        number:this.restaurant.number,
       });
       console.log(result);
              console.log(result);
              if(result.status==200)
              {
                this.$router.push({name:'HomePage'});
              }

              

      }
    }


}
</script>

<style>
.customtable{
    margin-top:80px;
 margin-left: 30px;
 margin-right: 30px;
 width: 1300px;
 
    border: solid 1px black;
}

.custom3{
    width:200px;
    height: 50px;
    color: black;
}


</style>