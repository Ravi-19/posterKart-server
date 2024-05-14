
// module.exports = {
//     routes: [
//       {
//         method: 'GET',
//         path: '/order/customRoute',
//         handler: 'api::order.customOrderController', // or 'plugin::plugin-name.controllerName.functionName' for a plugin-specific controller

//       },
//     ],
//   };

module.exports = {
    routes: [
      {
        method: 'GET',
        path: '/orders/customOrder',
        handler: 'order.customOrderController',
      },
    ],
  };