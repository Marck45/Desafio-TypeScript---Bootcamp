// declaração por inferência
let employee = {
    code: 10,
    name: "Jhon"
};

// declaração explicita
let employee2: {code: number, name: string} = {
    code: 10,
    name: "Jhon"
}

interface employee {
    code: number,
    name: string
}

let employee3: employee = {
    code: 300,
    name: "jhon"
}

const employeeobj = {} as employee;
employeeobj.name = "jhon";
employeeobj.code = 120;

const employeeobj2 = {
    code: 30,
    name: "john"
}




