<template>
  <div id="wrapper">
    <main>
      <div class="main-container">
        <h2>TRIGGERED STRATEGIES</h2>
        <form>
          <div class="row">

            <div class="form-group col-md-12">
              <label >Event Name</label>
              <input type="text" class="form-control" placeholder="Event Name" v-model="eventName">
            </div>

            <div class="form-group col-md-12">
              <label >Key</label>
              <input type="text" @keyup="eventKey" readonly class="form-control"  placeholder="Event Key" v-model="eventKeyValue" >
            </div>

            <div class="form-group col-md-12">
              <label >Event Will Occur on</label>
              <div class="row">
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0"   min="0" v-model="notifyOnMinutes">
                  <div class="input-group-append">
                    <span class="input-group-text" >minutes</span>
                  </div>
                </div>    
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0"   min="0" v-model="notifyOnSeconds">
                  <div class="input-group-append">
                    <span class="input-group-text" >second</span>
                  </div>
                </div>
              </div>
            </div>


            <div class="form-group col-md-12">
              <label >Notify Before Event</label>
              <div class="row">
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0"  v-model="notifyBeforeMinutes">
                  <div class="input-group-append">
                    <span class="input-group-text" >minutes</span>
                  </div>
                </div>    
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0"  v-model="notifyBeforeSeconds">
                  <div class="input-group-append">
                    <span class="input-group-text" >second</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group col-md-12">
              <label >Notification Text</label>
              <textarea class="form-control" aria-label="With textarea" placeholder="Leave empty to use default notification" v-model="notificationText"></textarea>
            </div>
            
            <div class="form-group col-md-12">
              <button type="button" @click="add()" class="btn btn-primary">Add</button>
              <button type="button" @click="cancel()" class="btn btn-danger">Cancel</button>
            </div>

          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
  import Helper from '@/utils/Helper'
  export default {
    name: 'create-triggered',
    components: {},
    data () {
      return {
        eventName: '',
        eventKeyValue: '',
        notifyOnSeconds: 0,
        notifyOnMinutes: 0,
        notifyBeforeSeconds: 0,
        notifyBeforeMinutes: 0,
        notificationText: ''
      }
    },
    methods: {
      cancel () {
        this.$router.back()
      },
      add () {
        let self = this
        this.$store.dispatch('addTriggeredEvent', {
          id: Helper.generateUniqID(),
          name: self.eventName,
          eventKey: self.eventKeyValue,
          notifyBefore: Helper.minutesToSeconds(self.notifyBeforeMinutes) + self.notifyBeforeSeconds,
          notifyBeforeText: Helper.mixMinutesAndSecondsText(self.notifyBeforeMinutes, self.notifyBeforeSeconds),
          notifyOn: Helper.minutesToSeconds(self.notifyOnMinutes) + self.notifyOnSeconds,
          notifyOnText: Helper.mixMinutesAndSecondsText(self.notifyOnMinutes, self.notifyOnSeconds),
          notificationText: self.notificationText
        })
        this.$router.push({name: 'landing-page'})
      },
      eventKey (event) {
        let self = this
        let keyMessage = ''
        keyMessage += event.key || String.fromCharCode(event.keyCode)
        self.eventKeyValue = keyMessage
        console.log(self.eventKeyValue)
      }
    },
    mounted () {
    }
  }
</script>

<style>
  
</style>
