export function loadShader(shaderPath) {
    return new Promise((resolve, reject) => {
        fetch(shaderPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load shader ${shaderPath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(shaderSource => {
                resolve(shaderSource);
            })
            .catch(error => {
                reject(error);
            });
    });
}