export const exists = (array, valueToCheck) => {
    return array.some((element) => {
        return element === valueToCheck;
    });
};

