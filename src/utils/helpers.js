export function formatDate(timestamp) {
  let date = new Date(timestamp)
  let options = {
    // weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }

  return date.toLocaleTimeString('en-us', options)
}
