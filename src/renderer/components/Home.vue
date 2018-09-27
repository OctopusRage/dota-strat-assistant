<template>
  <div id="wrapper">
    <main>
      <div class="main-container">
        <div class="menu-event row mb-3">
          <div class="col-md-12">
            <h2>BUILD YOUR STRATEGIES</h2>
            <div class="list-group ">
              <a @click="openCreatePeriodic()" class="list-group-item list-group-item-action">Create Periodic Event</a>
              <a @click="openCreateTriggered()" class="list-group-item list-group-item-action">Create Triggerred Event</a>
            </div>
          </div>
        </div>
        <h4>Current Strategies</h4>
        <div class="created-event row ">
          <div class="col-md-12 mb-3">
            <button type="button" @click="openEventStarted" class="btn btn-success">Start</button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
          <div class="list-group col-md-6 ">
            <span class="mb-2">Periodic Events</span>
            <a v-for="event in periodicEvents"
               :key="event.id"
               class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              {{event.name}}
              <span class="badge badge-primary badge-pill">{{event.notifyEveryText}}</span>
            </a>
            
          </div>
          <div class="list-group col-md-6">
            <span class="mb-2">Triggered Events</span>
            <a v-for="event in triggeredEvents"
               :key="event.id"
              class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              {{event.name}}
              <span class="" style="">
                <span class="badge badge-success badge-pill">ctrl+{{event.eventKey}}</span>
                <span class="badge badge-primary badge-pill">{{event.notifyOnText}}</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import Helper from '@/utils/Helper'
  export default {
    name: 'home',
    components: {},
    computed: {
      ...mapState({
        periodicEvents: state => state.Event.periodicEvents,
        triggeredEvents: state => state.Event.triggeredEvents
      })
    },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      openCreatePeriodic () {
        this.$router.push({name: 'create-periodic'})
      },
      openCreateTriggered () {
        this.$router.push({name: 'create-triggered'})
      },
      openEventStarted () {
        this.$store.dispatch('startEvents')
        this.$router.push({name: 'event-started'})
      },
      saveEventList () {}
    },
    mounted () {
      console.log(this.periodicEvents)
      Helper.pushNotification()
    }
  }
</script>

<style>
  
</style>
