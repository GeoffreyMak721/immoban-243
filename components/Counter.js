import React from 'react'

export default function Counter() {
    return (
      <section
        class="counter-section section-padding"
        data-stellar-background-ratio="0.5"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div class="counter">
                <div class="icon">
                  <i class="lni-users"></i>
                </div>
                <div class="counterUp">6252</div>
                <p>CLIENTS HEUREUX</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div class="counter">
                <div class="icon">
                  <i class="lni-apartment"></i>
                </div>
                <div class="counterUp">3091</div>
                <p>PROJECTS ACCOMPLIS</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div class="counter">
                <div class="icon">
                  <i class="lni-key"></i>
                </div>
                <div class="counterUp">1200</div>
                <p>MAISONS VENDUS</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-xs-12 work-counter-widget text-center">
              <div class="counter">
                <div class="icon">
                  <i class="lni-cup"></i>
                </div>
                <div class="counterUp">79</div>
                <p>TROPHÉS DE MÉRITE</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
