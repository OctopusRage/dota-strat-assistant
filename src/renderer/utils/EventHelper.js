import Helper from '@/utils/Helper'
export default {
  createPeriodicOnGoingEvents (events) {
    let results = []
    events.forEach(e => {
      if (e.notifyEvery > 0) {
        let i = e.notifyEvery
        while (i <= 3600) {
          results.push({
            id: Helper.generateUniqID(),
            name: e.name,
            type: 'periodic',
            notifyAt: i,
            notifyAtText: Helper.secondToMinutes(i).text,
            notificationText: e.notificationText
          })
          i = i + e.notifyEvery
        }
      }
    })
    return results
  }
}
