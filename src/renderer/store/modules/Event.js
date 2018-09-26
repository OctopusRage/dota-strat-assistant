const state = {
  triggeredEvent: {
    id: '',
    name: '',
    notifyBefore: 0,
    notifyBeforeText: '',
    notifyOn: 0,
    notifyOnText: '',
    eventKey: '',
    notificationText: ''
  },
  triggeredEvents: [],
  periodicEvent: {
    id: '',
    name: '',
    notifyBefore: 0,
    notifyBeforeText: '',
    notifyEvery: 0,
    notifyEveryText: '',
    notificationText: ''
  },
  periodicEvents: []
}

const mutations = {
  TRIGGERED_EVENT (state, event) {
    state.triggeredEvent = event
  },
  PERIODIC_EVENT (state, event) {
    state.periodicEvent = event
  },
  TRIGGERED_EVENTS (state, event) {
    state.triggeredEvents.push(event)
    state.triggeredEvents.sort(function (a, b) {
      return a.notifyEvery - b.notifyEvery
    })
  },
  PERIODIC_EVENTS (state, event) {
    state.periodicEvents.push(event)
    state.periodicEvents.sort(function (a, b) {
      return a.notifyEvery - b.notifyEvery
    })
  }
}

const actions = {
  newTriggeredEvent ({ commit }, event) {
    commit('TRIGGERED_EVENT', event)
  },
  newPeriodicEvent ({ commit }, event) {
    commit('PERIODIC_EVENT', event)
  },
  addTriggeredEvent ({ commit }, triggeredEvent) {
    commit('TRIGGERED_EVENTS', triggeredEvent)
  },
  addPeriodicEvent ({ commit }, periodicEvent) {
    commit('PERIODIC_EVENTS', periodicEvent)
  }
}

export default {
  state,
  mutations,
  actions
}
