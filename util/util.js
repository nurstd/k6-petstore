import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from 'k6/data'

function parse(csvPath,dataName){
  const arrayList = new SharedArray(`${dataName}`, function () {
    return papaparse.parse(open(csvPath), {header: true,}).data
  })
  return arrayList
}

export const utils = {
  parse : parse
}