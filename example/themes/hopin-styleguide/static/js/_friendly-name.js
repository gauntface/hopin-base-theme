export function friendlyName(varName) {
    const parts = varName.split(/_|-/g);
    const words = [];
    for (const p of parts) {
        if (p == '') {
            continue;
        }
        words.push(p.charAt(0).toUpperCase() + p.slice(1).toLowerCase());
    }
    return words.join(' ');
}
export function friendlyNameFromURL(urlString, fileSuffix) {
    const filenameWithExt = urlString.substring(urlString.lastIndexOf('/') + 1);
    const filename = filenameWithExt.substring(0, filenameWithExt.lastIndexOf(fileSuffix));
    return friendlyName(filename);
}
//# sourceMappingURL=_friendly-name.js.map