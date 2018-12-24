'use strict';

var flg = true;
if (flg) {
  var ss = 12;
  var pr = 22;
  var x = ss + pr;
}

function hello(event, context) {
  var sssss = async (event, context) => {
    console.log("*********************************hello***************1111******************");
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };
  }

  return sssss;
};
hello();
module.exports = hello
// module.exports.hello = async (event, context) => {
//   console.log("*********************************hello***************1111******************");
//   return {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: 'Go Serverless v1.0! Your function executed successfully!',
//       input: event,
//     }),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
