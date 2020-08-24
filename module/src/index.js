const Noodl = require('@noodl/noodl-sdk');

import MaterialIconNode from "./materialIcon/materialIconNode.js";

Noodl.defineModule({
    reactNodes: [
		MaterialIconNode
    ],
    nodes:[
    ],
    setup() {
		console.log("Material UI Icons module loaded");
		console.log("See available icons at: https://material.io/resources/icons/");
    }
});