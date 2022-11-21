// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  

// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
          getInstruction("mashedPotatoes", 5, (step6) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step6}</li>`;
            document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => console.log(error));
}, (error) => console.log(error));    
}, (error) => console.log(error));    
}, (error) => console.log(error));    
}, (error) => console.log(error));    
}, (error) => console.log(error));

// Iteration 2 - using promises
// async function makeBroccoli() {
  obtainInstruction("steak", 0).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 1);
  }).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 2);
  }).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 3);
  }).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 4);
  }).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 5);
  }).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 6);
  }).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`
    return obtainInstruction("steak", 7);
  }).then((paso) => {
    document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
    document.querySelector("#steak").innerHTML += `<li>Stake is ready!</li>`;
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction("steak", 8);
  });
    

// Iteration 3 using async/await

const makeBroccoli = async () => {
  let result = await obtainInstruction("broccoli",0);
  document.querySelector("#broccoli").innerHTML += `<li>${result}</li>`;

  let result1 = await obtainInstruction("broccoli",1);
  document.querySelector("#broccoli").innerHTML += `<li>${result1}</li>`;

  let result2 = await obtainInstruction("broccoli",2);
  document.querySelector("#broccoli").innerHTML += `<li>${result2}</li>`;

  let result3 = await obtainInstruction("broccoli",3);
  document.querySelector("#broccoli").innerHTML += `<li>${result3}</li>`;

  let result4 = await obtainInstruction("broccoli",4);
  document.querySelector("#broccoli").innerHTML += `<li>${result4}</li>`;

  let result5 = await obtainInstruction("broccoli",5);
  document.querySelector("#broccoli").innerHTML += `<li>${result5}</li>`;

  let result6 = await obtainInstruction("broccoli",6);
  document.querySelector("#broccoli").innerHTML += `<li>${result6}</li>`;

  let result7 = await obtainInstruction("broccoli",1);
  document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;
  document.querySelector("#broccoliImg").removeAttribute("hidden");
};

makeBroccoli();


// Bonus 2 - Promise all
let brussels1 = obtainInstruction("brusselsSprouts",0);
document.querySelector("#broccoli").innerHTML += `<li>${brussels1}</li>`;
let brussels2 = obtainInstruction("brusselsSprouts",1);
document.querySelector("#broccoli").innerHTML += `<li>${brussels2}</li>`;

Promise.all([brussels1, brussels2]).then((brussels) => {
  console.log(brussels);
});
