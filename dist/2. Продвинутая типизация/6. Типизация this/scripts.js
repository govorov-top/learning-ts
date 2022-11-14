"use strict";
/** Типизация this **/
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    }
};
// <button onClick="myClickHandler(2)">Click!</button>
function myClickHandler(event) {
    this.disabled = true;
}
