export default {
  generateUniqID () {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
  },
  minutesToSeconds (minute) {
    return minute * 60
  },
  mixMinutesAndSecondsText (minutes, seconds) {
    let minutesText = minutes > 9 ? minutes : '0' + minutes
    let secondsText = seconds > 9 ? seconds : '0' + seconds
    return minutesText + ':' + secondsText
  }
}
