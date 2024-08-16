import { expect, chai } from 'https://jslib.k6.io/k6chaijs/4.3.4.1/index.js'
import { initContractPlugin } from 'https://jslib.k6.io/k6chaijs-contracts/4.3.4.0/index.js';

//Function for assert response api with contract schema
function expectJsonSchema(response,expectJsonSchema){
  initContractPlugin(chai)
  expect(response.json(), "response API schema").to.matchSchema(expectJsonSchema)
}

//Function for assert response status code with the expected response status
function expectStatusCode(response,expectedResCode){
  expect(response.status,'status code').to.equal(expectedResCode)
}

function expectEqualData(response,assertData,caseNaming=null){
  expect(response,caseNaming).to.equal(assertData)
}

function expectNotEqualData(response,assertData,caseNaming=null){
  expect(response,caseNaming).not.to.equal(assertData)
}

function expectNotInclude(response,data,caseNaming=null){
  expect(JSON.stringify(response.json().data), caseNaming).to.not.include(data)
}

function expectHaveKeys(response, assertKeyArray, caseNaming={}){
  const assertKey = assertKeyArray.map(key => `${key}`).join(',');
  expect(response, caseNaming).to.have.keys(assertKey)
}

function expectHaveProperty(response, assertKey, caseNaming={}){
  expect(response, caseNaming).to.have.property(assertKey)
}

function expectNotNull(response, caseNaming={}){
  expect(response, caseNaming).to.not.be.null
}

export const assert = {
  expect : {
    jsonSchema : expectJsonSchema,
    statusCode : expectStatusCode,
    equal : expectEqualData,
    notEqual : expectNotEqualData,
    notInclude : expectNotInclude,
    haveKeys : expectHaveKeys,
    haveProperty : expectHaveProperty,
    notNull : expectNotNull
  }
}