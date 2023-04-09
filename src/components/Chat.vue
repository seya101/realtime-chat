<template>
    <div class="chat container">
        <h2 class="lime-text text-lighten-5">Welcome!👋</h2>
        <p class="lime-text text-lighten-5">Share your thoughts with the world</p>
        <div class="card">
            <div class="card-content">
                <ul class="messages" v-chat-scroll>
                    <li v-for="message in messages" :key="message.id">
                        <span class="light-blue-text text-accent-4">{{message.name}}</span>
                        <span class="grey-text text-darken-3">{{message.content}}</span>
                        <span class="grey-text time">{{message.timestamp}}</span>
                    </li>
                </ul>
            </div>
            <div class="card-action">
                <NewMessage :name="name"/>
            </div>
        </div>
    </div>
</template>

<script>
import NewMessage from './NewMessage.vue';
import { projectFirestore } from '@/firebase/init'
import moment from 'moment'

export default {
  name: 'Chat',
  props: ['name'],
  components: {
    NewMessage
},
  data () {
    return {
      messages: []
    }
  },
  created() {
    let ref = projectFirestore.collection('messages').orderBy('timestamp')

    ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach((change) => {
            if(change.type == 'added') {
                let doc = change.doc
                this.messages.push({
                    id: doc.id,
                    name: doc.data().name,
                    content: doc.data().content,
                    timestamp: moment(doc.data().timestamp).format('lll')
                })
            }
        })
    })
  }
}
</script>

<style>

.chat .card {
    border-radius: 10px
}

.chat h2 {
    font-size: 3em;
    font-weight: bold;
    margin: 40px 0px 0px 0px;
}

.chat p {
    font-size: 0.8em;
    margin: 0px 0px 40px 0px;
}

.chat .messages li{
    margin: 10px 0px;
}

.chat span {
    font-size: 1.4em;
}

.chat .time {
    display: block;
    font-size: 0.8em;
}

.messages{
    max-height: 300px;
    overflow: auto;
}

.messages::-webkit-scrollbar {
    width: 3px;
}

.messages::-webkit-scrollbar-track {
    background: #ddd;
}

.messages::-webkit-scrollbar-thumb {
    background: #aaa;
}
</style>