import { Languages } from '../languages';
 export class ThLanguage implements Languages{
    summaryCaseAll_Date: string = "วันที่";
    summaryCaseAll_NewCase: string = "ผู้ป่วยใหม่";
    summaryCaseAll_NewRecoverd: string = "รักษาหายใหม่";
    summaryCaseAll_NewDeath: string = "เสียชีวิต";
    summaryCaseAll_TotalCase: string = "ติดโควิดทั้งหมด";
    summaryCaseAll_TotalRecoverd: string = "รักษาหายทั้งหมด";
    summaryCaseAll_TotalDeath: string = "เสียชีวิตสะสม";

    REFERENCES: string = "ข้อมูลจากกรมควบคุมโรค";
}