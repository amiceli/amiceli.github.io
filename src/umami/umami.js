/* eslint-disable no-undef */

const isDev = import.meta.env.MODE === `development`

function trackEvent (eventName, eventProperty) {
    if (isDev) {
        console.debug(`mock_umami_track_event`, eventName, eventProperty)
        return Promise.resolve()
    }

    return umami.track(eventName, eventProperty)
}

export function trackVisit () {
    trackEvent(`home`, {})
}

export function trackLink (url) {
    trackEvent(`open`, { url }).then(() => {
        window.open(url, `_blank`)
    })
}
