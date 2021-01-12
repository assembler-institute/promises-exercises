export function isFunction(fn) {
    return typeof fn === "function";
}

export function task(msg, shouldFail) {
    return new Promise((resolve, reject) => {
        if (shouldFail) {
            reject(new Error(msg));
        }

        setTimeout(() => {
            resolve(msg);
        }, 5);
    });
}
