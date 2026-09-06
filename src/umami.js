/* eslint-disable no-undef */

const isDev = import.meta.env.MODE === `development`

function trackEvent(eventName, eventProperty) {
    if (isDev) {
        console.debug(`mock_umami_track_event`, eventName, eventProperty)

        return Promise.resolve()
    }

    if (typeof umami === `undefined`) {
        return Promise.resolve()
    }

    return Promise.resolve(umami.track(eventName, eventProperty))
}

export function trackLink(url) {
    trackEvent(`open`, {
        url,
    }).then(() => {
        window.open(url, `_blank`)
    })
}
