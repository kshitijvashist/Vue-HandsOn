import Vue from 'vue'


//Vue.config.productionTip = false

const app=new Vue({
  el:"#app",
  data:{
      sports:[],
  },
  mounted(){
    fetch("http://localhost:8080/get/method")
    .then(response=>response.json)
    .then((data)=>{
      this.sports=data;
     
    })
  },
      template: `
      <div>
        <li v-for="sport in Sports">{{sport:sportsName}}</li>

      </div> 
    `,
});
