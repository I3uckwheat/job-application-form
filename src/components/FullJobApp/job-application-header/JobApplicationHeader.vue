<template>
  <header>
    <v-layout row wrap class="mb-3">
      <v-flex xs12 sm7 text-xs-center text-sm-left>
        <h1>Application<br>For Employment</h1>
      </v-flex>
      <v-flex xs12 sm5 text-xs-center text-sm-right>
        <img src="../../assets/images/logos/tr-logo-340x167.png">
        <br>
        <v-btn
            color="warning"
            id='btn'
            class="mt-3"
            @click='printID'>
          <v-icon large dark class="mr-2">print</v-icon>
          Print Application
        </v-btn>

      </v-flex>
    </v-layout>

    <v-alert
        class='jah-discrimination-message'
        color="info"
        icon="info"
        v-model="discriminationMessageState"
        dismissible>
      {{ discriminationMessage }}
    </v-alert>
  </header>
</template>

<script>
  export default {
    name: 'job-application-header',
    data() {
      return {
        discriminationMessage: 'We consider applicants for all positions without regard to race, color, ' +
          'religion, creed, gender, national origin, age, disability, marital or veteran status, or any ' +
          'other legally protected status.',
        discriminationMessageState: true,
      };
    },

    /**
     * Methods
     */
    methods: {
      printID() {
        const newWin = window.open('', 'Print Application');

        newWin.document.open();
        newWin.document.write(this.printHtml());
        newWin.document.close();

        setTimeout(() => {
          newWin.close();
        }, 2500);
      },

      printHtml() {
        return `
          <html>
            <head>
              <style type="text/css">
                #ReviewHtml label {
                  display: block;
                  font-weight: bold;
                  color: #888888;
                  font-size: 14pt;
                }

                #ReviewHtml span {
                  display: block;
                  color: #3D3D3D;
                  font-size: 14pt;
                }

                #ReviewHtml > section {
                  page-break-after: always;
                }

                #ReviewHtml > section:nth-child(4) {
                  page-break-after: avoid;
                }

                #ReviewHtml > section > h5 {
                  font-size: 18pt;
                  margin: 25px 0 20px 0;
                }

                #ReviewHtml h6 {
                  font-size: 16pt;
                  margin: 10px 0 20px 0;
                }

                #ReviewHtml > section > div,
                #ReviewHtml > section > div > div {
                  margin-bottom: 10px;
                }
              </style>
            </head>

            <body onload="window.print()">
              ${document.getElementById('ReviewHtml').outerHTML}
            </body>
          </html>
        `;
      },
    },
  };
</script>

<style scoped>
  h1 {
    margin: 0;
    font-variant: small-caps;
    font-size: 425%;
    font-weight: 500;
    letter-spacing: 1px;
    vertical-align: middle;
    height: 100%;
  }

  img {
    max-width: 100%;
  }

  .jah-discrimination-message {
    font-size: 120%;
  }

  h1 {
    margin-top: 10px;
  }
</style>
