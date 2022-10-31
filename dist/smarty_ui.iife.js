var smarty_ui = function(exports, vue) {
  "use strict";
  const JSXButton = vue.defineComponent({
    name: "JSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("JSX Button")]);
    }
  });
  const _sfc_main = {
    name: "SFCButton"
  };
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("button", null, "SFC Button", -1);
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("div", null, "1", -1);
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
      _hoisted_1,
      _hoisted_2
    ], 64);
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const __uno = "";
  const props = {
    size: {
      type: String,
      default: "medium"
    },
    color: {
      type: String,
      default: "blue"
    },
    round: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  };
  const Button = vue.defineComponent({
    name: "SButton",
    props,
    setup(props2, {
      slots
    }) {
      const size = {
        small: {
          x: "2",
          y: "1",
          text: "sm"
        },
        medium: {
          x: "3",
          y: "1.5",
          text: "base"
        },
        large: {
          x: "4",
          y: "2",
          text: "lg"
        }
      };
      return () => vue.createVNode("button", {
        "class": `
          py-${size[props2.size].y}
          px-${size[props2.size].x}
          ${props2.round ? "rounded-full" : "rounded-lg"}
          bg-${props2.color}-${props2.plain ? "100" : "500"}
          hover:bg-${props2.color}-400
          border-${props2.color}-${props2.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props2.plain ? props2.color + "-500" : "white"}
          text-${size[props2.size].text}
          hover:text-white
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
          `
      }, [props2.icon !== "" ? vue.createVNode("i", {
        "class": `i-ic-baseline-${props2.icon} p-3`
      }, null) : "", slots.default ? slots.default() : ""]);
    }
  });
  const entry = {
    install(app) {
      app.component(Button.name, Button);
      app.component(SFCButton.name, SFCButton);
      app.component(JSXButton.name, JSXButton);
    }
  };
  exports.JSXButton = JSXButton;
  exports.MyButton = Button;
  exports.SFCButton = SFCButton;
  exports.default = entry;
  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
  return exports;
}({}, Vue);
//# sourceMappingURL=smarty_ui.iife.js.map
