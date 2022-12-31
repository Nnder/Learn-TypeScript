"use strict";
/// <reference path="form-namespace.ts"/>
var IForm;
(function (IForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state
            };
        }
    }
    IForm.formD = new MyForm('D@add.rcs');
    console.log(IForm.formD);
})(IForm || (IForm = {}));
console.log(IForm.formD);
//# sourceMappingURL=namespaces.js.map