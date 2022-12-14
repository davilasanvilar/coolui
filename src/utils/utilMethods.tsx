import moment from "moment"
import { conf } from "../conf"


const getStringFromDate = (date: Date) => {
    return moment(date).format(conf.dateTimeFormat)
}




export const utilMethods = { getStringFromDate }
