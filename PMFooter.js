

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class PMFooter extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <footer>
      <a href="mailto:reinhart@pilcrow.monster"><img class="pillcrow" src="images/envelope.png" alt="reinhart@pilcrow.monster" title="reinhart@pilcrow.monster"></a>
      <img class="pillcrow" src="images/pixelgifs/pillcrow2.gif" />
    </footer>
        `
        }
    }

    window.customElements.define("pm-footer", PMFooter)

