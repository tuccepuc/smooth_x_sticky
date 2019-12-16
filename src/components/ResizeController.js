import Vue from 'vue';

var _ResizeController = Vue.extend({

    props: {
        
    },

    data: function () {        
        return {
            width: 1024,
            height: 768,
        }
    },
    methods: {
        _onResize: function() {

            this.width = window.innerWidth;
            this.height = window.innerHeight;

            console.log(this.width, "_x_", this.height);

            this.$emit("resize", {width: this.width, height: this.height});
        }
    },
    mounted()
    {
        console.log("mounted", this.width, "_x_", this.height);

        this.$on("resize", (data) => {

            console.log("onResize", data.width, data.height);
        });

        window.addEventListener("resize", this._onResize);
    }
  });
  
  export const ResizeController = new _ResizeController();
