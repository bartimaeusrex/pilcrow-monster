

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class PMHeaderInfo extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-Clacks-Overhead" content="GNU Terry Pratchett" />


  <link href="styles.css" rel="stylesheet" />

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Press+Start+2P&family=Courier+Prime:ital@0;1&family=Cutive+Mono&family=Hammersmith+One&family=Lexend+Tera&family=EB+Garamond:ital,wght@0,400;0,600;0,800;1,400;1,800&family=Montserrat:ital,wght@0,200;0,700;0,900;1,200;1,700&family=Sansita&family=VT323&display=swap" rel="stylesheet">
  
  <script src="https://kit.fontawesome.com/0b4688c080.js" crossorigin="anonymous"></script>
        `
        }
    }

    window.customElements.define("pm-headerinfo", PMHeaderInfo)

