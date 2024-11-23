

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class PMSignature extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
<div class="align-right"><img class="img-2em" src="images/pm_big2.png"/></div>
    <br />
        `
        }
    }

    window.customElements.define("pm-signature", PMSignature)

