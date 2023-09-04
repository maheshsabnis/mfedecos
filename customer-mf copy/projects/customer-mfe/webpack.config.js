const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
/* Actual COnfoguation for MF */
module.exports = withModuleFederationPlugin({
  /* The Unique Name: Exposed to the Container (Shell/Host)
  Perform the Module loading using this name
  */
  name: 'customer-mfe',
  /* The Type (Module / Component) exposed to the Container */
  // exposes: {
  //   './Component': './projects/customer-mfe/src/app/app.component.ts',
  // },

  exposes: {
    './Module': './projects/customer-mfe/src/app/customer/customer.module.ts',
  },
  /* Allows ti share the node mibraries those are used by the remote module (exposed-module) to run the application */
  shared: {
    ...shareAll(
      {
        singleton: true, /* Allow a single version of the lib in shared scope */
        strictVersion: true, /* WebPack will Reject the Lib if the version is changed  */
        requiredVersion: 'auto'
      }),
  },

});
