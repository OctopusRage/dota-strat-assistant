<template>
  <div id="wrapper">
    <main>
      <div class="main-container">
        <h1 id="timer">
          <time v-html="t"></time>
        </h1>
        <div class="row">
          <div class="list-group col-md-12 mb-3">
            <span class="mb-2">On Going Events</span>
            <a v-for="e in upComingEvents" :key="e.id" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              {{e.name}}
              <span class="" style="">
                <span class="badge badge-success badge-pill">ctrl+k</span>
                <span class="badge badge-primary badge-pill">{{e.notifyAtText}}</span>
              </span>
            </a>
          </div>
          <div>
            <button type="button" @click="$router.back()" class="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'event-start',
    computed: {
      ...mapState({
        upComingEvents: state => state.Event.upComingEvents
      })
    },
    components: {},
    data: function () {
      return {
        totalTime: 0,
        seconds: 0,
        minutes: 0,
        hours: 0,
        t: '00:00:00',
        events: []
      }
    },
    methods: {
      add () {
        this.seconds++
        this.totalTime++
        if (this.seconds >= 60) {
          this.seconds = 0
          this.minutes++
          if (this.minutes >= 60) {
            this.minutes = 0
            this.hours++
          }
        }
        this.t = (this.hours ? (this.hours > 9 ? this.hours : '0' + this.hours) : '00') + ':' + (this.minutes ? (this.minutes > 9 ? this.minutes : '0' + this.minutes) : '00') + ':' + (this.seconds > 9 ? this.seconds : '0' + this.seconds)
        this.timer()
      },
      timer () {
        setTimeout(this.add, 1000)
      },
      cancel () {
        this.$router.back()
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
      this.timer()
      console.log(this.upComingEvents)
    }
  }
</script>

<style  scoped>
  #timer {
    text-align: center;
  }
</style>