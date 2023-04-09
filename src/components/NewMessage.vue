<template>
    <div class="new-message">
        <form @submit.prevent="addMessage">
            <label for="new-message">New Message (edit to add):</label>
            <input type="text" name="new-message" v-model="newMesssage">
            <p v-if="feedback" class="red-text"> {{ feedback }}</p>
        </form>
        
    </div>
</template>

<script>
import { projectFirestore } from '@/firebase/init'

export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMesssage: null,
            feedback: null,
        }
    },
    methods: {
        addMessage() {
            // console.log(this.newMesssage, this.name, Date.now())
            if(this.newMesssage) {
                projectFirestore.collection('messages').add({
                    content: this.newMesssage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                this.newMesssage = null
                this.feedback = null
            } else {
                this.feedback = "Enter message in order to send one"
            }
        }
    }
}
</script>
