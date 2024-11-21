"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeeByEmail = exports.filterUsersByName = exports.createEmployee = exports.getAllDesignations = exports.getAllEmployees = void 0;
const pg_1 = require("pg");
const dbConfig_json_1 = __importDefault(require("../dbConfig.json"));
function getTenantDbConfig(tenantName) {
    for (const tenant of dbConfig_json_1.default.tenants) {
        if (tenant.database.toLowerCase() === tenantName.toLowerCase()) {
            return tenant;
        }
    }
    return undefined;
}
async function executeQuery(tenantName, queryText, values) {
    const tenantDbConfig = getTenantDbConfig(tenantName);
    if (!tenantDbConfig) {
        throw new Error('Tenant database configuration not found.');
    }
    const pool = new pg_1.Pool(tenantDbConfig);
    let client;
    try {
        client = await pool.connect();
        const result = await client.query(queryText, values);
        return result.rows;
    }
    catch (error) {
        console.error('Error executing query:', error);
        throw new Error(`Failed to execute query: ${error.message}`);
    }
    finally {
        if (client) {
            client.release();
        }
        await pool.end();
    }
}
async function getAllEmployees(tenantName) {
    const query = `
    SELECT * FROM public.employee
  `;
    const employees = await executeQuery(tenantName, query);
    return { message: 'Retrieved all employees successfully.', data: employees };
}
exports.getAllEmployees = getAllEmployees;
async function getAllDesignations(tenantName) {
    const query = `
  SELECT * FROM public.designation
`;
    const designation = await executeQuery(tenantName, query);
    if (designation.length > 0) {
        return {
            message: 'Retrieved all designation successfully.',
            data: designation,
        };
    }
    const list = [
        'intern',
        'Software Consultant',
        'Senior Software Consultant',
        'AVP',
        'VP',
    ];
    list.map(async (item) => {
        const queryInsert = `
    INSERT INTO public.designation (title,created_at, updated_at)
    VALUES ($1, NOW(), NOW())
    RETURNING *;
  `;
        const values = [item];
        await executeQuery(tenantName, queryInsert, values);
    });
    return {
        message: 'Retrieved all designation successfully.',
        data: designation,
    };
}
exports.getAllDesignations = getAllDesignations;
async function createEmployee(tenantName, employeeData) {
    const queryCheck = `
    SELECT * FROM public.employee
    WHERE email = $1
  `;
    const checkResult = await executeQuery(tenantName, queryCheck, [
        employeeData.email,
    ]);
    if (checkResult.length > 0) {
        return {
            message: 'User with this email already exists. Please use another email.',
        };
    }
    const queryInsert = `
    INSERT INTO public.employee (first_name, designation, role, gender, email, password, studio_name, tenant_id, created_at, updated_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
    RETURNING *;
  `;
    const values = [
        employeeData.first_name,
        employeeData.designation,
        employeeData.role,
        employeeData.gender,
        employeeData.email,
        employeeData.password,
        employeeData.studio_name,
        employeeData.tenant_id,
    ];
    const insertResult = await executeQuery(tenantName, queryInsert, values);
    insertResult[0]['tenant_code'] = employeeData.tenant_code;
    return {
        message: 'User created successfully and data saved.',
        data: insertResult[0],
    };
}
exports.createEmployee = createEmployee;
async function filterUsersByName(tenantName, name) {
    if (name) {
        const query = `
    SELECT * FROM public.employee WHERE first_name LIKE '${name}%'
  `;
        const users = await executeQuery(tenantName, query);
        const filteredUsers = users.map((user) => ({
            id: user.id,
            first_name: user.first_name,
            designation: user.designation,
            email: user.email,
            studio: user.studio_name,
            image: user.image,
        }));
        return { message: 'Users filtered successfully.', data: filteredUsers };
    }
    else {
        return { message: 'Please provide valid name to retrieve a user.' };
    }
}
exports.filterUsersByName = filterUsersByName;
async function getEmployeeByEmail(tenantName, email) {
    const query = 'SELECT * FROM employee WHERE email = $1';
    return await executeQuery(tenantName, query, [email]);
}
exports.getEmployeeByEmail = getEmployeeByEmail;
//# sourceMappingURL=employeeQueries.js.map