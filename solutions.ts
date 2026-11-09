function multiplyValue(value: number, multiplier?: number): number {
    if (multiplier !== undefined) {
        return value * multiplier;
    }
    return value * 2;
}


type ProcessInputType = string | number | boolean;
type ProcessOutputType = string | number;
const processInput = (value: ProcessInputType): ProcessOutputType => {
    if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "string") {
        return value.trim().toLowerCase();
    } else {
        return value ? "Active" : "Inactive";
    }
};

type FormatCoordinateTuple = readonly [number, number, string];

const formatCoordinate = (coordinate: FormatCoordinateTuple): string => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((arr, el) => arr.concat(el), []);
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    })
}




const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item) => item[key]);
}


class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string
    ) {
        super(name, baseSalary)
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}


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