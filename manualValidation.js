// Validates a "book" object. Returns a list of error messages.
// an empty list means valid.
function validateBook(input) {
    const errors = [];
    if (input === null || typeof input !== 'object') return ['Not an object'];
    
    // Presence + Type.
    if (typeof input.id !== 'string' || input.id.trim() === '') errors.push('id is required');
    if (typeof input.title !== 'string' || input.title.trim() === '') errors.push('title is required');
    if (typeof input.author !== 'string') errors.push('author must be a string');

    // Range.
    const thisYear = new Date().getFullYear();
    if (typeof input.year !== 'number' || input.year < 1 || input.year > thisYear) {
        errors.push(`year must be a number between 1 and ${thisYear}`);
    }
    return errors;
}

const result = validateBook(incomingBook);
if (result.length > 0) throw new Error('Invalid book: ' + result.join(', '));
