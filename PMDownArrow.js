

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class PMDownArrow extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `

<svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
  <path
     style="opacity:0.853;fill:rgba(0, 0, 0, 0.4);paint-order:markers stroke fill"
     d="M 2.9728907,11.876378 0.03487167,8.778702 1.4513322,8.772252 2.8677929,8.765802 V 4.3828827 0 H 6.123802 9.3798113 v 4.3828827 4.3828826 l 1.4182917,0.00645 1.418292,0.00645 -3.136091,3.0932087 c -1.7248504,1.701265 -3.1435845,3.095218 -3.152743,3.097675 -0.00916,0.0025 -1.3387601,-1.389487 -2.9546703,-3.093208 z"
     id="path1" />
</svg>

        `
        }
    }

    window.customElements.define("pm-downarrow", PMDownArrow)

