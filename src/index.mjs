import assert from 'node:assert/strict';
import { createGraphProjectReference, validateGraphProject } from '@x12i/graphenix-authoring-analysis';

const project = createGraphProjectReference();
const result = validateGraphProject(project);
assert.equal(result.valid, true, JSON.stringify(result.errors));
assert.equal(validateGraphProject({}).valid, false);
console.log({ valid: result.valid, project });
