<template>
  <div id="app">
    <div id="onereptileList">
      <h1>{{ hometowncab.companyname }}</h1>
      <h1>{{ hometowncab.companyslogan }}</h1>
    </div>    
  </div>
</template>

<script>
  import { db } from './firebase';

  export default {
    name: 'app',
    data() {
      return {
        hometowncab: [],
        newReptile: ''
      }
    },
    firestore() {
      return {
        hometowncab: db.collection('hometowncab').doc('constants'),
      }
    },
    methods: {
      addReptile: function() {
        this.$firestore.reptiles.add(
          {
            name: this.newReptile,
            timestamp: new Date()
          }
        );
        this.newReptile = '';
      },
      deleteReptile: function(reptile) {
        this.$firestore.reptiles.doc(reptile['.key']).delete();
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .reptileList {
    list-style: none;
  }
</style>