//p1
function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
}



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

//p3

type FormatCoordinateTuple = readonly  [number, number, string] ;
const formatCoordinate = (Coordinate: FormatCoordinateTuple) : string =>{
   const  [latitude, longitude, locationName] = Coordinate;
   return `Location: ${locationName} (${latitude}, ${longitude})`
}


//p4
const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((arr, el) => arr.concat(el), [] );
};


//p5
interface Course {
    title: string
    students: number
    isPublished: boolean
}

const getPopularCourses = (courses: Course[], minStudents: number) : Course[] => {
        return courses.filter((course)=>{
            return course.isPublished===true && course.students >= minStudents;
        })
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];


//p6
const pluckValues = <T, K extends keyof T>(items: T[],key: K): T[K][] =>{
   return items.map((item)=>item[key] ) ;
}

//p7

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee{
    constructor(
        name: string, 
        baseSalary: number,
        private department: string
    ){
        super(name,baseSalary)
    }
    getRoleInfo(): string{
        return `Manager of ${this.department}: ${this.name}`;
    }
}

//p8
const validateAgeAsync = async (age: number): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        } else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};