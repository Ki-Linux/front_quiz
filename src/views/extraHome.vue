<template>
   <div id="extraHome">
      <p>extra</p>
      <p>{{ showUserName }}</p>
   </div>
</template>
<script lang="ts">
   import { Component, Vue } from 'vue-property-decorator';
   import { sendUserName, showNameFromServer } from '../components/userNameFromServer';
   //import axios from 'axios';

   @Component
   export default class extraHome extends Vue {
      public UserName = "";

      created() {

         sendUserName();

         this.UserName = showNameFromServer;

      /*axios.defaults.baseURL = "http://localhost:3000";

      axios.get('/getUserNameWithiykrnmltpoebrlmknebwr34t35reefwefWEFYUMm4te')
      .then((response) => {
         this.showUserName = response.data;
      })
      .catch((err) => {
         console.log(err);
      })*/

      }

   }
</script>
