<template>
    <div id="header-bar" @click="expand">
        <div class="header-bar-items" ref="barItems">
            <header-bar-item label="one"></header-bar-item>
            <header-bar-item label="two"></header-bar-item>
            <header-bar-item label="three"></header-bar-item>
        </div>
    </div>
</template>

<script>

import { ScrollController } from './ScrollController';
import HeaderBarItem from './HeaderBarItem';

import gsap from "gsap";

export default {
    name: "HeaderBar",

    components: {
        HeaderBarItem
    },

    data: function() {
        return {
            STATES: [
                "default",
                "hanging", 
                "follow", 
                "hide"
            ],
            anchor: -1,
            state: "default"
        }
    },

    methods: {

        moveIn: function()
        {
            // console.log("moveIn");
            gsap.to(this.$el, {duration: .35, backgroundColor: "#ffffff", transformOrigin: "right center", margin: "0%", width: "100%", height: "160px", translateX: 0, translateY: 0, ease: "back.in"});
            gsap.to(this.$refs.barItems, {duration: .45, alpha: 1, marginLeft: "10%", ease: "cubic.inOut", delay: .125});
        },

        hangOut: function()
        {
            // console.log("hangOut");
            gsap.to(this.$el, {duration: .35, backgroundColor: "#ffffff", transformOrigin: "right center", margin: "5%", width: "90%", height: "100px", translateX: 0, translateY: 0, ease: "back.inOut"});
            gsap.to(this.$refs.barItems, {duration: .45, alpha: 1, marginLeft: "15%", ease: "cubic.out", delay: 0});
        },

        moveOut: function()
        {
            // console.log("moveOut");
            gsap.to(this.$el, {duration: .225, backgroundColor: "#121212", transformOrigin: "right center", margin: "5%", width: "120px", height: "120px", translateX: 20, translateY: -10, ease: "sine.inOut"});
            gsap.to(this.$refs.barItems, {duration: .1, alpha: 0, ease: "cubic.in", delay: 0});
        },

        initState: function()
        {
            gsap.set(this.$el, {transformOrigin: "center center", margin: "0%", width: "100%", height: "160px", translateX: 0, translateY: 0});
        },

        changeState: function(state)
        {
            if (this.state != state)
            {
                // console.log("STATE::", state, this.state == state);
    
                this.state = state;

                this._clearTweens();

                switch (state)
                {
                    case "default": this.moveIn();
                    break;

                    case "hanging": this.hangOut();
                    break;
                    
                    case "hide": this.moveOut();
                    break;
                }
            }
        },
   
        expand()
        {
            console.log("expanding!!");

            if (this.state == "hide")
            {
                this.anchor = 0;
                this.changeState("hanging")
            }
        },

        _clearTweens: function()
        {
            gsap.killTweensOf(this.$el);
            gsap.killTweensOf(this.$refs.barItems);
        }
    },


    mounted()
    {
        ScrollController.$on("smooth-scroll", (smoothData) => {

            // console.log(smoothData, this.state);

            if (smoothData.change > 0) 
            {
                if (smoothData.screen < .15) this.changeState("default");
                else 
                {
                    this.anchor = smoothData.screen;
                    this.changeState("hanging");
                }
            }
            else if (smoothData.change < 0 && this.anchor !== 0)
            {
                // console.log("stalling");
                if (smoothData.screen > this.anchor + .15)
                {
                    this.anchor = 0;
                    this.changeState("hanging");
                }
            }
            else {
                if (smoothData.screen < .15) this.changeState("default");
                else if (smoothData.screen < 1) this.changeState("hanging");
                else this.changeState("hide");
            }
        });
        
        this.initState();

        // console.log(this.$refs);

        // gsap.ticker.add((e) => {

        //     console.log("ticking", e);
        // });
    }
}
</script>

<style scoped>
    #header-bar
    {
        width: 100%;
        height: 160px;

        display: block;
        position: absolute;

        overflow: hidden;

        right: 0;

        background-color: white;
        box-sizing: border-box;

        margin: 0% 0% 0% 0%;
    }

    .header-bar-items
    {
        position: relative;
        display: block;
        

        height: 100%;

        float: left;
        margin-left: 10%;
    }
</style>