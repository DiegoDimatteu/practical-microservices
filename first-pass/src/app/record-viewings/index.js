const express = require('express')

function createActions ({
}) {
    return {
    }
}
    -
function createHandlers ({ actions }) {
    return {
    }
}

function createRecordViewings ({
}) {
    const actions = createActions({
    })
    const handlers = createHandlers({ actions })
    const router = express.Router()
    router.route('/:videoId').post(handlers.handleRecordViewing)
    return { actions, handlers, router }
}

module.exports = createRecordViewings


function createHandlers ({ actions }) {
    function handleRecordViewing (req, res) {
        return actions
            .recordViewing(req.context.traceId, req.params.videoId)
            .then(() => res.redirect('/'))
    }
    return {
        handleRecordViewing
    }
}