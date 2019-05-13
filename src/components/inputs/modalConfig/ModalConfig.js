import { Chrome } from "vue-color";
import textinput from "../TextInputBrick.vue" 

export default {
  components: {
    "chrome-picker": Chrome,
    "brickinput":textinput
  },
  data() {
    return {
      brickJSON: {
        fieldCode: "",
        fieldValue: "",
        fieldWidth: "",
        fieldColor: "#000000",
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
      widths: ["xs", "lg", "md", "sm"],
      widthsVal: "",
      widthsNumber: "",
      widthsText: "",
      width: [],
      modalWidths: false,
      widthIndex: -1,
      labelPosition: ["top", "left", "right"],
      append: [
        { name: "", icon: "" },
        { name: "Calendario", icon: "fa-calendar-alt" },
        { name: "Dirección", icon: "fa-address-book" },
        { name: "Siguiente", icon: "fa-arrow-right" },
        { name: "Calculadora", icon: "fa-calculator" },
        { name: "Guadar", icon: "fa-coins" },
        { name: "tarjeta de Credito", icon: "fa-credit-card" }
      ],
      prepend: [
        { name: "", icon: "" },
        { name: "Papelera", icon: "fa-trash" },
        { name: "Bloquear", icon: "fa-ban" },
        { name: "Restar", icon: "fa-minus" },
        { name: "Aceptar", icon: "fa-check" },
        { name: "Copiar", icon: "fa-copy" },
        { name: "Comentarios", icon: "fa-comments" }
      ],
      brickType: [
        {
          text:"Text",
          value:"textinput"
        }, 
        {
          text:"Switch",
          value: "switch", 
        },
        {
          text:"Checkbox",
          value:"checkbox"
        },
        {
          text:"Date",
          value: "datepicker", 
        }
      ],
      rules: ["required", "max", "alpha", "numeric"],
      rule: "",
      modalRules: false,
      required: true,
      numeric: true,
      alpha: true,
      extraVal: "",
      yes: true,
      validation: {}
    };
  },
  methods: {
    changeField(){
      this.$refs.brickinput.assingData(this.brickJSON)       
    },
    addIndexWidth(val, val2) {
      this.widthsText = val + val2;
      if (this.widthIndex == -1) {
        this.width.push(this.widthsText);
        this.brickJSON.fieldWidth = this.width.toString().replace(/,/g, " ");
        this.dropWidth(val);
      } else {
        this.width[this.widthIndex] = this.widthsText;
        this.brickJSON.fieldWidth = this.width.toString().replace(/,/g, " ");
        this.dropWidth(val);
      }
      this.changeField()
    },
    dropWidth(val) {
      let indexDrop = this.widths.indexOf(val);
      if (indexDrop >= 0) {
        this.widths.splice(indexDrop, 1);
        this.changeField()
      }
    },
    restoreWidth(val) {
      let indexRestore = this.widths.indexOf(val);
      if (indexRestore < 0) {
        this.widths.push(val);
      }
    },
    removeWidth(index, item) {
      this.width.splice(index, 1);
      let a = item.substring(0, 2);
      this.restoreWidth(a);
      this.changeField()
    },
    editWidth(item, index) {
      this.widthIndex = index;
      let a = item.substring(0, 2);
      let b = item.substring(2, 4);
      this.openModalWidth(0, index, a, b);
      this.restoreWidth(a);
    },
    openModalWidth(mode, index, a, b) {
      if (mode == 0) {
        this.widthsVal = a;
        this.widthsNumber = b;
        this.widthsText = a + b;
        this.widthIndex = index;
        this.modalWidths = true;
        this.$validator.reset();
      } else {
        this.widthsVal = "";
        this.widthsNumber = "";
        this.modalWidths = true;
        this.widthIndex = -1;
        this.$validator.reset();
      }
    },
    closeModalWidth(widthsVal) {
      this.modalWidths = false;
      let confirm = this.widths.includes(widthsVal);
      if (confirm) {
        this.dropWidth(widthsVal);
      }
    },
    openModalValidationRules(mode, index, item) {
      if (mode == 0) {
        this.rule = index;
        this.extraVal = item;
        this.modalRules = true;
        this.$validator.reset();
      } else {
        this.rule = "";
        this.extraVal = "";
        this.modalRules = true;
        this.$validator.reset();
      }
    },
    addValidationRules(rule, extraVal) {
      this.modalRules = false;
      console.log(
        "Esto es lo que llega en Rule: ",
        rule,
        ", Esto es lo que llega en ExtraVal: ",
        extraVal
      );
      if (!extraVal) {
        console.log("No llego extraVal");
        this.validation[rule] = true;
        console.log("Asi quedo Validation", this.validation);
      } else {
        console.log("Llego extraVal");
        this.validation[rule] = extraVal;
        console.log("Asi quedo Validation", this.validation);
      }
    },
    closeModalValidationRules(rule) {
      this.modalRules = false;
      this.rule = "";
      this.extraVal = "";
      this.$validator.reset();
      console.log(rule);
    },
    removeRule(index, item) {
      console.log(
        "El index a borrar es: ",
        index,
        " El item que llega es: ",
        item
      );
      delete this.validation[index];
      if (index in this.validation) {
        console.log("No ejecuto el borrado");
      } else {
        console.log("Si ejecuto el borrado");
      }
      console.log("Este es Validation", this.validation);
      this.$validator.reset();
      this.modalRules = true;
      this.modalRules = false;
    },
    editRule(item, index) {
      this.openModalValidationRules(0, index, item);
      // this.restoreWidth(a);
    }
  },
  watch: {
    width(val) {
      this.brickJSON.fieldWidth = this.width.toString().replace(/,/g, " ")
    },
    validation(val) {
      console.log(val, "Este es el val de la regla");
      this.brickJSON.validationRule = this.validation;
      console.log(
        "WATCH: Asi queda el validationRule: ",
        this.brickJSON.validationRule
      );
    },
    validationRule(val) {
      console.log("Este es el console del Val del validationRule ", val);
      console.log(
        "Este es el console del validationRule ",
        this.brickJSON.validationRule
      );
    }
  },
};
