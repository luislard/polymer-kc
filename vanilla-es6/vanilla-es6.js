/**
 * Author: Luis Rosales
 **/
'use strict';


class VanillaEs6 extends HTMLElement {
    constructor(){
        super();
    }

    createdCallback(){
        this.innerHTML = '<p>Hola</p>'
    }
}

const VanillaEs6 = document.registerElement('vanilla-es6', vanillaEs6);