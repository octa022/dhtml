import { Chrome } from "vue-color";
export default {
  components: {
    "chrome-picker": Chrome
  },
  data() {
    return {
      // brickJSON: {
      //   fieldCode: "", //text
      //   fieldValue: "", //text
      //   fieldWidth: "xs12 md4", //selec multiple
      //   fieldColor: "", //colorPicker
      //   dataClass: "", //text
      //   dataStyle: "", //text
      //   label: "", //text
      //   labelPosition: "", //text
      //   "append-icon": "", //selec
      //   "prepend-icon": "", //selec
      //   defaultValue: "", //text
      //   brickType: "TEXTINPUT", //selec
      //   visible: true, //Booleand
      //   prefix: "", selec
      //   suffix: "", selec
      //   enabled: true, //Booleand
      //   validationRule: {}, //Objec Selec
      //   hint: "" // texr y esto es Place Holder
      // }
      brickJSON: {
        fieldCode: "",
        fieldValue: "",
        fieldWidth: "",
        fieldColor: "",
        dataClass: "",
        dataStyle: "",
        label: "",
        labelPosition: "",
        append: "",
        prepend: "",
        defaultValue: "",
        brickType: "",
        visible: true,
        prefix: "",
        suffix: "",
        enabled: true,
        validationRule: {},
        hint: ""
      },
      widths: ["xs12", "lg12", "md6", "sm6"],
      labelPosition: ["top", "left", "right"],
      prepend: [
        { name: "Papelera", icon: "fa-trash" },
        { name: "Bloquear", icon: "fa-ban" },
        { name: "Restar", icon: "fa-minus" },
        { name: "Aceptar", icon: "fa-check" },
        { name: "Copiar", icon: "fa-copy" },
        { name: "Comentarios", icon: "fa-comments" }
      ]
    };
  },
  methods: {},
  mounted() {}
};
