


export const mapObjectArray = (element) => {
    const keys = Object.keys(element);
    return keys.map((index) => element[index]);
}