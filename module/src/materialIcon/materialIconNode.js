import MaterialIconReact from './materialIconReact.js'

const MaterialIconStyleEnum = [
	{value: "", label: "Filled"},
	{value: "-outlined", label: "Outlined"},
	{value: "-round", label: "Rounded"},
	{value: "-sharp", label: "Sharp"},
	{value: "-two-tone", label: "Two-Tone"}
];

const MaterialIconNode = {
	name: "Icon | Material UI",
	category: "Visual",
	getReactComponent() {
		return MaterialIconReact
	},
	allowChildren: false,
	receiveParentStyleProp: true,
	inputProps: {
		icon: {
			group: "Icon",
            displayName: "Icon",
            type: "string",
			default: "home"
		},
		style: {
			group: "Icon",
			displayName: "Icon Style",
			type: {
				name: "enum",
				enums: MaterialIconStyleEnum
			},
			default: ""
		},
        size: {
			group: "Style",
            displayName: "Icon Size",
            type: "number",
			default: "24"
		},
		color: {
			group: "Style",
			type: "color",
			displayName: "Icon Color",
			default: "#000000"
		}
	},
	outputProps: {
		onClick: {type: 'signal', displayName: 'Click'}
	}
}

export default MaterialIconNode;