function parseLinkHeader (linkHeader) {
  return linkHeader.split(',').map((metaString) => {
    return {
      part: metaString.match(/rel=(.*)/)[1].replace(/"/g, ''),
      value: metaString.substring(metaString.lastIndexOf('<') + 1, metaString.lastIndexOf('>'))
    }
  })
}

export function isLastPage (response) {
  if (typeof response.headers.link === 'undefined') {
    return true
  }
  const linkHeader = parseLinkHeader(response.headers.link)
  return linkHeader.hasOwnProperty('next') || linkHeader.hasOwnProperty('last')
}
