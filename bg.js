fetch('words.json')
    .then(data=>data.json())
        .then(msg=>chrome.runtime.onMessage.addListener(
            (request, sender, sendResponse)=>sendResponse({key: "words", content:msg}))
        )