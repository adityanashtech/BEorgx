"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscription = exports.getAllSubscription = void 0;
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
        throw new Error(`Failed to execute query: ${error.message}`);
    }
    finally {
        if (client) {
            client.release();
        }
        await pool.end();
    }
}
async function getAllSubscription(tenantName) {
    const query = `
      SELECT * FROM public.subscription
    `;
    const subscription = await executeQuery(tenantName, query);
    return {
        message: 'Retrieved all subscription successfully.',
        data: subscription,
    };
}
exports.getAllSubscription = getAllSubscription;
async function createSubscription(tenantName, subscriptionData) {
    const queryCheck = `
      SELECT * FROM public.subscription
      WHERE planName = $1
    `;
    const checkResult = await executeQuery(tenantName, queryCheck, [
        subscriptionData.planName,
    ]);
    if (checkResult.length > 0) {
        return {
            message: 'Subscription with this name already exists. Please use another name.',
        };
    }
    const queryInsert = `
      INSERT INTO public.subscription (planName, numberOfEmployees, planDuration, planDescription, price)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [
        subscriptionData.planName,
        subscriptionData.numberOfEmployees,
        subscriptionData.planDuration,
        subscriptionData.planDescription,
        subscriptionData.price,
    ];
    const insertResult = await executeQuery(tenantName, queryInsert, values);
    return {
        message: 'Subscription created successfully and data saved.',
        data: insertResult[0],
    };
}
exports.createSubscription = createSubscription;
//# sourceMappingURL=subscriptionQueries.js.map