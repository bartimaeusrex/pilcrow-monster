

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class PMManicule extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
<img class="manicule" src="images/manicule0.png" />
        `
        }
    }

    window.customElements.define("pm-manicule", PMManicule)

