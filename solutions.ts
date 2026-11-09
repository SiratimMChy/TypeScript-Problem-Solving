//p1
function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
}

console.log(multiplyValue(10));
console.log(multiplyValue(10, 5));
console.log(multiplyValue(7, 0));

//p2

type ProcessInputType = string | number | boolean;
type ProcessOutputType = string | number;
const processInput = (value: ProcessInputType): ProcessOutputType => {
  if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "string") {
    return value.toLowerCase().trim();
  } else {
    if (value === true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));

//p3

type FormatCoordinateTuple = readonly  [number, number, string] ;
const formatCoordinate = (Coordinate: FormatCoordinateTuple) : string =>{
   const  [latitude, longitude, locationName] = Coordinate;
   return `Location: ${locationName} (${latitude}, ${longitude})`
}

console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

//p4

//p5

//p6

//p7

//p8
