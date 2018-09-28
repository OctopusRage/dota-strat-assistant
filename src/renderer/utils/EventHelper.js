import Helper from '@/utils/Helper'
export default {
  createPeriodicOnGoingEvents (events) {
    let results = []
    events.forEach(e => {
      if (e.notifyEvery > 0) {
        let i = e.notifyEvery
        let notifyBefore = parseInt((e.notifyEvery * 20) / 100)
        while (i <= 3600) {
          if (e.notifyEvery > 60) {
            results.push({
              id: Helper.generateUniqID(),
              name: e.name + ' in ' + Helper.secondToMinutes(notifyBefore).text,
              type: 'periodic',
              notifyAt: i - notifyBefore,
              notifyAtText: Helper.secondToMinutes(i - notifyBefore).text,
              notificationText: e.name + ' in ' + Helper.secondToMinutes(i - notifyBefore).text
            })
          }
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
