
const calcTempDifference = (temp1, temp2) => {
    return Math.abs(temp1 - temp2).toFixed(2);
}

const calcAverageTemp = (temp1, temp2) => {
    return ((temp1 + temp2) / 2).toFixed(2);
}

// convert wind speed from kilometers per hour to meters per second.
const changeWindUnits = (wind) => {
    return (wind / 3.6).toFixed(2);
}

export { calcTempDifference, calcAverageTemp, changeWindUnits };