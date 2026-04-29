// 1. Throw when something is wrong.
function setAge(person, age) {
    if (typeof age !== 'number' || age < 0) {
        throw new Error('Age must be a non-negative number');
    }
    person.age = age;
}

// 2. Catch where you can do something useful.
try {
    setAge(user, "thirty" );  // wrong type.
} catch (err) {
    console.error("setAge failed:", err.message);
    // recover, retry, or surface to the UI
}