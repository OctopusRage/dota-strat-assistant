<template>
  <div id="wrapper">
    <main>
      <div class="main-container">
        <h2>PERIODIC STRATEGIES</h2>
        <form>
          <div class="row">

            <div class="form-group col-md-12">
              <label for="eventName">Event Name</label>
              <input type="text" class="form-control" id="eventName" v-model="eventName" placeholder="Event Name">
            </div>

            <div class="form-group col-md-12">
              <label>Notify Event Every</label>
              <div class="row">
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0" v-model="notifyEveryMinutes"  aria-label="Notify Every" >
                  <div class="input-group-append">
                    <span class="input-group-text" >minutes</span>
                  </div>
                </div>    
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0" v-model="notifyEverySeconds"  aria-label="Recipient's username" >
                  <div class="input-group-append">
                    <span class="input-group-text" >second</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group col-md-12">
              <label>Notify Before Event</label>
              <div class="row">
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0" v-model="notifyBeforeMinutes"  >
                  <div class="input-group-append">
                    <span class="input-group-text" >minutes</span>
                  </div>
                </div>    
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0"  v-model="notifyBeforeSeconds" >
                  <div class="input-group-append">
                    <span class="input-group-text" >second</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group col-md-12">
              <label>Notification Text</label>
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
    name: 'create-periodic',
    components: {},
    data () {
      return {
        eventName: '',
        notifyEverySeconds: 0,
        notifyEveryMinutes: 0,
        notifyBeforeSeconds: 0,
        notifyBeforeMinutes: 0,
        notificationText: ''
      }
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      add () {
        let self = this
        this.$store.dispatch('addPeriodicEvent', {
          id: Helper.generateUniqID(),
          name: self.eventName,
          notifyBefore: Helper.minutesToSeconds(self.notifyBeforeMinutes) + self.notifyBeforeSeconds,
          notifyBeforeText: Helper.mixMinutesAndSecondsText(self.notifyBeforeMinutes, self.notifyBeforeSeconds),
          notifyEvery: Helper.minutesToSeconds(self.notifyEveryMinutes) + self.notifyEverySeconds,
          notifyEveryText: Helper.mixMinutesAndSecondsText(self.notifyEveryMinutes, self.notifyEverySeconds),
          notificationText: self.notificationText
        })
        this.$router.push({name: 'landing-page'})
      },
      cancel () {
        this.$router.back()
      }
    },
    mounted () {
    }
  }
</script>

<style>
  
</style>
