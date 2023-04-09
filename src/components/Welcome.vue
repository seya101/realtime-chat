<template>
  <div class="welcome container">
    <div class="card z-depth-3">
      <div class="card-content center-align">
        <h2 class="light-blue-text text-accent-4">Welcome!👋</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your preferred name:</label>
          <input type="text" name="name" v-model="name">
          <p v-if="feedback" class="red-text"> {{ feedback }}</p>
          <button class="btn light-blue accent-4">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null,
    }
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: 'Chat', params: {name: this.name} })
        
      } else {
        this.feedback = 'You must enter name to join'
      }
    }
  }
}
</script>


<style>
.welcome {
  max-width: 400px;
  margin-top: 100px;
}

.welcome h2 {
  font-size: 3em;
  font-weight: bold;
  margin: 20px 0px;
}

.welcome .card {
  border-radius: 10px
}

.welcome button {
  margin: 30px auto;
  text-transform:capitalize
}

</style>
