import { TypePermission } from './TypePermission';
import { Employee } from './Employee';

export class Permission {
    id?: string;
    employee: Employee = {};
    type?: TypePermission;
    date?: Date;

    constructor() {
        this.employee = new Employee();
    }
}