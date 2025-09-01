export function formatDate(dateString) {
  let parts = dateString.split('-')
  let hasDay = parts.length > 2

  //return new Date(`${dateString}Z`).toLocaleDateString('en-US', {
    return new Date(`${dateString}Z`).toLocaleDateString('fr-CA', {
    day: hasDay ? 'numeric' : undefined,
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
