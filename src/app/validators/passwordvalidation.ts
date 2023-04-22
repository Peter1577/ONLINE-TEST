// import { AbstractControl } from "@angular/forms";

import { AbstractControl } from "@angular/forms";

// export function passwordMatch(Epwd:any ,Cpwd:any){

//   return  function (form:AbstractControl){
//         const passwordvalue = form .get(Epwd)?.value
//         const Confirmpasswordvalue =form.get(Cpwd)?.value

//         if(passwordvalue === Confirmpasswordvalue){
//             return null;
//         }

//         return {PasswordMissMathcError:true}

//     }
// }


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