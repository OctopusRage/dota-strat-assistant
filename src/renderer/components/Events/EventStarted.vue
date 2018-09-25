<template>
  <div id="wrapper">
    <main>
      <div class="main-container">
        <h1>
          <time>00:00:00</time>
        </h1>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'event-start',
    components: {},
    data: function () {
      return {
        seconds: 0,
        minutes: 0,
        hours: 0,
        t: null
      }
    },
    methods: {
      add () {
        this.seconds++
        if (this.seconds >= 60) {
          this.seconds = 0
          this.minutes++
          if (this.minutes >= 60) {
            this.minutes = 0
            this.hours++
          }
        }
        let h1 = document.getElementsByTagName('h1')[0]
        h1.textContent = (this.hours ? (this.hours > 9 ? this.hours : '0' + this.hours) : '00') + ':' + (this.minutes ? (this.minutes > 9 ? this.minutes : '0' + this.minutes) : '00') + ':' + (this.seconds > 9 ? this.seconds : '0' + this.seconds)
        this.timer()
      },
      timer () {
        this.t = setTimeout(this.add, 1000)
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
    }
  }
</script>

<style>
  
</style>
