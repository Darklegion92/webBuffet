

export const responseErrors = (response) => {
    if (response.messages && response.messages.length > 0) {
        const message = response.messages[0];
        if (Array.isArray(message)) {
            if (message.length) {
                return message[Object.keys(message[0])[0]][0];
            }
        } else if (typeof message === "object") {
            const keys = Object.keys(message);
            return message[keys[0]];
        }
    } else if (response.message !== undefined) {
        return response.message;
    }
    return '';
}