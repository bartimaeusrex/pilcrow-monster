

// This DOES NOT use the "shadow DOM", which means that the global CSS from the main CSS file WILL APPLY HERE AS WELL. Using the shadow DOM would mean I would have to include all the necessary CSS styling here so that everything is contained.

class PM202410 extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `
    <!-- POST -->
    <a href="./20241027">
      <div class="date">2024 October 27: Positivity (Toxic)</div>
    </a>
    <p class="blurb firstpara article">In which our humble bloggist attempts to make a case for healthy negativity or something. Practical pessimism? Sympathetic cynicism...?<a href="./20241027"><img class="manicule" src="images/manicule0.png" /></a></p>
     <!-- POST -->
    <a href="./20241018">
      <div class="date">2024 October 18: Nosferatu</div>
    </a>
    <p class="blurb firstpara article">In which I discourse upon the joys of seeing the 1922 grand-daddy of horror films with a live orchestra in a packed theater.<a href="./20241018"><img class="manicule" src="images/manicule0.png" /></a></p>
    <!-- POST -->
    <a href="./20241012">
      <div class="date">2024 October 12: Pacing</div>
    </a>
    <p class="blurb firstpara article">In which I contemplate an element of narrative and my mixed feelings about it's perceived importance, and related general musings.<a href="./20241012"><img class="manicule" src="images/manicule0.png" /></a></p>
    <!-- POST -->
    <a href="./20241010">
      <div class="date">2024 October 10: Pixels</div>
    </a>
    <p class="blurb firstpara article">In which I admit to a bit of a fib, provide examples to illustrate exactly how much of a fib it was, and expound on a particular area of related curiosity. <a href="./20241010"><img class="manicule" src="images/manicule0.png" /></a></p>
    <!-- POST -->
    <a href="./20241007">
      <div class="date">2024 October 07: Projects</div>
    </a>
    <p class="blurb firstpara article">In which your humble blogger lays out some of their in-progress projects, from vague concept to finishing touches, and why a bunch of them may never get done, and that's ok.<a href="./20241007"><img class="manicule" src="images/manicule0.png" /></a></p>
    <!-- POST -->
    <a href="./20241004">
      <div class="date">2024 October 04: Pilcrow!</div>
    </a>
    <p class="blurb firstpara article">In which I attempt to explain myself, and this Pilcrow Monster thing; what even is a pilcrow and why is it called that in the first place?<a href="./20241004"><img class="manicule" src="images/manicule0.png" /></a></p>
    <!-- POST -->
    <a href="./20241001">
      <div class="date">2024 October 01: Homebrew</div>
    </a>
    <p class="blurb firstpara article">In which I revive my idea for a small, homebrew spot of internet, a very manual, disconnected blog. No frills, just brass tacks: looks good on mobile and desktop, solid typography. Simple.<a href="./20241001"><img class="manicule" src="images/manicule0.png" /></a></p>
        `
        }
    }

    window.customElements.define("pm-202410", PM202410)

