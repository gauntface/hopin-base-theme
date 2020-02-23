export function copyToClipboard(txt) {
    const hiddenElement = document.createElement('div');
    hiddenElement.textContent = txt;
    document.body.appendChild(hiddenElement);
    var range = document.createRange();
    range.selectNode(hiddenElement);
    window.getSelection().empty();
    window.getSelection().addRange(range);
    let success = false;
    try {
        success = document.execCommand('copy');
    }
    catch (err) {
        console.log('Error thrown when copying text: ', err);
    }
    window.getSelection().removeRange(range);
    document.body.removeChild(hiddenElement);
    return success;
}
//# sourceMappingURL=_clipboard.js.map