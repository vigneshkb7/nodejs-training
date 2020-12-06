/**
 *  normal version of promise
 */

// let newPromise = new Promise((resolve, reject) => {
//   resolve(100);
// });

// newPromise
//   .then((data) => console.log("-----promise resolved", data))
//   .catch((err) => {
//     throw err;
//   });

/**
 *  async await version ---- latest 2020 version
 */

async function newPromise() {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

async function test() {
  try {
    const res = await newPromise();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

test();
