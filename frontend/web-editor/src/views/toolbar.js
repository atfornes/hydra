const html = require('choo/html')

module.exports = function toolbar(state, emit) {
    const hidden = state.showInfo ? 'hidden' : '';
    const fullscreenHidden = state.browserFullscreen? 'hidden' : '';

    const dispatch = (eventName) => (e) => emit(eventName, e)

    const icon = (id, className, title, event) => html`
        <i id="${id}-icon" class="fas icon ${className}" onclick=${dispatch(event)} aria-hidden="true"></i>`

    return html`<div>
        ${icon("run", `fa-play-circle ${hidden}`, "Run all code (ctrl+shift+enter)", 'editor:evalAll')}
        ${icon("share", `fa-upload ${hidden}`, "upload to gallery", 'gallery:shareSketch')}
        ${icon("clear", `fa fa-trash ${hidden}`, "clear all", 'editor:clearAll')}
        ${icon("shuffle", `fa-random`, "show random sketch", 'gallery:showExample')}
        ${icon("mutator", `fa-dice ${hidden}`, "make random change", 'editor:randomize')}
        ${icon("fullscreen",
            state.fullscreen? `fa-compress`: `fa-expand`
            + ` ${hidden}`
            + ` ${fullscreenHidden}`,
            "toggle fullscreen",
            'view:toggle-fullscreen')}
        ${icon("close", state.showInfo? "fa-times" : "fa-question-circle", "", 'toggle info')}
    </div>`
}