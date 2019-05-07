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
      brickType: ["textinput", "switch", "checkbox"]
    };
  },
  methods: {
    addIndexWidth(val, val2) {
      this.widthsText = val + val2;
      if (this.widthIndex == -1) {
        this.width.push(this.widthsText);
        console.log(
          "Este es el arreglo de los tamaños sin tratar: ",
          this.width
        );
        this.brickJSON.fieldWidth = this.width.toString().replace(/,/g, " ");
        console.log(
          "Asi se va llenando el textfiel: ",
          this.brickJSON.fieldWidth
        );
        this.dropWidth(val);
      } else {
        console.log("Este es sin la modificacion: ", this.width);
        this.width[this.widthIndex] = this.widthsText;
        this.brickJSON.fieldWidth = this.width.toString().replace(/,/g, " ");
        console.log("Este es con la modificacion: ", this.width);
        console.log(
          "Este es lo que se le mandara a miguel: ",
          this.brickJSON.fieldWidth
        );
      }
    },
    dropWidth(val) {
      console.log("Aqui va VAAAL: ", val);

      let indexDrop = this.widths.indexOf(val);

      console.log("Aqui va el INDEXXX: ", indexDrop);

      if (indexDrop >= 0) {
        this.widths.splice(val, 1);
      }
    },
    restoreWidth(val) {
      let indexRestore = this.widths.indexOf(val);
      if (indexRestore < 0) {
        this.widths.push(val);
      }
    },
    removeWidth(index, item) {
      console.log("Este es el index que llega: ", index);
      this.width.splice(index, 1);
      let a = item.substring(0, 2);
      this.restoreWidth(a);
    },
    editWidth(item, index) {
      this.widthIndex = index;
      let a = item.substring(0, 2);
      let b = item.substring(2, 4);
      this.openModalWidth(0, index, a, b);
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
    }
  },
  watch: {
    width(val) {
      console.log(val, "Este es el val");
      this.brickJSON.fieldWidth = this.width.toString().replace(/,/g, " ");
      console.log(
        "WATCH: Asi queda el fieldWidth: ",
        this.brickJSON.fieldWidth
      );
    }
  },
  mounted() {}
};
