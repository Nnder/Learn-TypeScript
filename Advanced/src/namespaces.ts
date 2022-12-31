/// <reference path="form-namespace.ts"/>
namespace IForm {
    class MyForm {
        private type: FormType = 'inline';
        private state: FormState = 'active';

        constructor(public email: string) {

        }

        getInfo(){
            return{
                type: this.type,
                state: this.state
            }
        }
    }

    export const formD = new MyForm('D@add.rcs');
    console.log(formD);
}

console.log(IForm.formD);
