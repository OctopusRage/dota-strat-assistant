import Helper from '@/utils/Helper'
export default {
  createPeriodicOnGoingEvents (events) {
    let results = [];
    events.forEach(e => {
      if (e.notifyBefore > 0) {
        results.push({
          id: Helper.generateUniqID(),
          type: 'periodic',
          notifyAt: {},
          notifyAtText: '',
          notificationText: ''
        })
      }
    })
  }
}
