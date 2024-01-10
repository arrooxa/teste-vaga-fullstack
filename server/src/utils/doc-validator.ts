export function docValidator(doc: string) {
    if (doc.length !== 11 && doc.length !== 14) return null;

    return doc;
}
