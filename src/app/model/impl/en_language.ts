import { Languages } from '../languages';
export class ENLanguage implements Languages{
    summaryCaseAll_Date: string = "Date";
    summaryCaseAll_NewCase: string = "New Confirmed";
    summaryCaseAll_NewRecoverd: string = "New Recovered";
    summaryCaseAll_NewDeath: string = "New Deaths";
    summaryCaseAll_TotalCase: string = "Confirmed";
    summaryCaseAll_TotalRecoverd: string = "Recovered";
    summaryCaseAll_TotalDeath: string = "Deaths";

    REFERENCES: string = "Information from Department of Disease Control";
}