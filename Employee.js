class Employee {
    constructor (name, title, salary, boss) {
        this.name = name
        this.title = title
        this.salary = salary
        this.boss = boss
    }
    bonus(multiplier) {
        let b = this.salary * multiplier;
        return b
    }
}
module.exports=Employee
