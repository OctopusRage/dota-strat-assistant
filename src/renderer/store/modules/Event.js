import EventHelper from '@/utils/EventHelper'
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
  periodicEvents: [],
  upComingEvent: {
    id: '',
    type: '',
    notifyAt: {},
    notifyAtText: '',
    notificationText: ''
  },
  upComingEvents: []
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
    state.triggeredEvent = state.triggeredEvents.sort(function (a, b) {
      return a.notifyEvery - b.notifyEvery
    })
    localStorage.setItem('localTriggeredEvents', JSON.stringify(state.triggeredEvents))
  },
  PERIODIC_EVENTS (state, event) {
    state.periodicEvents.push(event)
    state.periodicEvents = state.periodicEvents.sort(function (a, b) {
      return a.notifyEvery - b.notifyEvery
    })
    localStorage.setItem('localPeriodicEvents', JSON.stringify(state.periodicEvents))
  },
  UPCOMING_EVENTS (state) {
    state.upComingEvents = EventHelper.createPeriodicOnGoingEvents(state.periodicEvents)
    state.upComingEvents = state.upComingEvents.sort((a, b) => {
      return a.notifyAt - b.notifyAt
    })
  },
  REMOVE_LATEST_EVENT (state) {
    state.upComingEvents.shift()
    console.log('remove event triggered', state.upComingEvents[0])
  },
  SYNC_LOCAL_PERIODIC_EVENTS (state) {
    let ls = localStorage.getItem('localPeriodicEvents')
    ls = JSON.parse(ls)
    if (ls) {
      if (Array.isArray(ls)) {
        if (state.periodicEvents.length < 1 && ls.length > 0) state.periodicEvents = ls
      }
    }
  },
  SYNC_LOCAL_TRIGGERED_EVENTS (state) {
    let ls = localStorage.getItem('localTriggeredEvents')
    ls = JSON.parse(ls)
    if (ls) {
      if (Array.isArray(ls)) {
        if (state.triggeredEvents.length < 1 && ls.length > 0) state.triggeredEvents = ls
      }
    }
  },
  DELETE_PERIODIC_EVENT (state, eventId) {
    let periodicEventIndex = state.periodicEvents.indexOf(e => {
      return e.id === eventId
    })
    state.periodicEvents.splice(periodicEventIndex, 1)
    localStorage.setItem('localPeriodicEvents', JSON.stringify(state.periodicEvents))
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
  },
  startEvents ({commit}) {
    commit('UPCOMING_EVENTS')
  },
  removeLatestEvent ({commit}) {
    commit('REMOVE_LATEST_EVENT')
  },
  syncLocalPeriodicEvents ({commit}) {
    commit('SYNC_LOCAL_PERIODIC_EVENTS')
  },
  syncLocalTriggeredEvents ({commit}) {
    commit('SYNC_LOCAL_TRIGGERED_EVENTS')
  },
  deletePeriodicEvent ({commit}, eventId) {
    commit('DELETE_PERIODIC_EVENT', eventId)
  }
}

export default {
  state,
  mutations,
  actions
}
