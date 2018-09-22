<template>
  <div class="hello">
    <h1>{{ msg }}</h1>    
  </div>
</template>

<script>
import { db } from './firebase'

export default {
  name: 'HelloWorld',
  data() {
      return {
        reptiles: [],
        newReptile: ''
      }
    },
    firestore() {
      return {
        reptiles: db.collection('reptiles'),
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
