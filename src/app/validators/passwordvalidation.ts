
import { AbstractControl } from "@angular/forms";

export function PasswordMatch (Epwd:any , Password:any){

   return function (form:AbstractControl){
    let passwordvalue = form.get(Epwd)?.value
    let Confirmpasswordvalue =form.get(Password)?.value

    if(passwordvalue === Confirmpasswordvalue){
        return null;
    }
    return {PasswordMissMatch:true}
    }
}