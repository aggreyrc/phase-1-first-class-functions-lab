// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers){
    return [drivers[2], drivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier){
    return function multiply(fare){
        return fare * multiplier;
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2;
}

const fareTripler = function( createFareMultiplier){
    return createFareMultiplier * 3;
}

const selectDifferentDrivers = function(drivers, selection){
   return selection(drivers);
}