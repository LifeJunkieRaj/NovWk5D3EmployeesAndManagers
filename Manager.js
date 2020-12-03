const Employee = require("./Employee")
class Manager extends Employee{
    constructor(name, title, salary, boss, employees) {
        super(name, title, salary, boss)
        this.employees = employees
    }
    bonus(multiplier) {
        let employeesSalaries = this.totalSubsalary();
        return (employeesSalaries + this.salary) * multiplier
    }
    totalSubsalary() {
        let total = 0
        this.employees.forEach(em => {
            total += em.salary;
        })
        return total
    }
}
let clifford = new Employee("Clifford", "TA", 90000, "Susie")
let lily = new Employee("Lily", "TA", 90000, "Susie")
let susie = new Manager("Susie", "TA Manager", 100000, "Calvin", [clifford, lily])
let calvin = new Manager("Calvin", "Director", 130000, "Hobbes", [susie])
let hobbes = new  Manager("Hobbes", "Founder", 1000000, null, [calvin])
console.log(hobbes.bonus(0.05)); // 50000
console.log(calvin.bonus(0.05)); // 6500
console.log(susie.bonus(0.05)); // 14000
console.log(lily.bonus(0.05)); // 4500
console.log(clifford.bonus(0.05)); // 4500
