import { XMLParser } from 'fast-xml-parser'

export const xmlParse = (dataSet: string) => {
  const dataArr = new XMLParser()
  return dataArr.parse(dataSet)
}
