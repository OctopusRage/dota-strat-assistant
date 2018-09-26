<template>
  <div id="wrapper">
    <main>
      <div class="main-container">
        <h2>PERIODIC STRATEGIES</h2>
        <form>
          <div class="row">

            <div class="form-group col-md-12">
              <label for="eventName">Event Name</label>
              <input type="text" class="form-control" id="eventName" placeholder="Event Name">
            </div>

            <div class="form-group col-md-12">
              <label for="notifyBefore">Event Repeat Every</label>
              <div class="row">
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0" value="0" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">minutes</span>
                  </div>
                </div>    
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0" value="0" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">second</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group col-md-12">
              <label for="notifyBefore">Notify Before Event</label>
              <div class="row">
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0" value="0" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">minutes</span>
                  </div>
                </div>    
                <div class="input-group mb-3 col-md-6">
                  <input type="number" class="form-control" placeholder="0" value="0" aria-label="Recipient's username" aria-describedby="basic-addon2">
                  <div class="input-group-append">
                    <span class="input-group-text" id="basic-addon2">second</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group col-md-12">
              <label for="eventTimeRepeat">Notification Text</label>
              <textarea class="form-control" aria-label="With textarea" placeholder="Leave empty to use default notification"></textarea>
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
  export default {
    name: 'create-periodic',
    components: {},
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      },
      add () {
        this.$store.dispatch('someAsyncTask')
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
