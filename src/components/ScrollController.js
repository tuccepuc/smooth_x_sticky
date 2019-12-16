import Vue from 'vue';

let _ScrollController = Vue.extend({

    data: function() {

        return {
            scroll: 0
        }
    },

    methods: {
        _onScroll: function()
        {
            let currentScroll = window.scrollY;

            let scrollPercentage = currentScroll / (document.body.clientHeight - window.innerHeight);
            let screenPercentage = scrollPercentage * (document.body.clientHeight / window.innerHeight);
            let scrollChange = this.scroll - currentScroll;

            this.scroll = currentScroll;
            
            // console.log(e, currentScroll, window.innerHeight, screenPercentage);

            this.$emit("smooth-scroll", {scrollY: currentScroll, percentage:scrollPercentage, screen:screenPercentage, change:scrollChange});
        }
    },

    mounted()
    {
        console.log("ScrollController::mounted");

        window.addEventListener("scroll", this._onScroll);
    }
})

export const ScrollController = new _ScrollController();