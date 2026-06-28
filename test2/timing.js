const expect=(v)=>({toBeLessThan:(n)=>{if(!(v<n))throw new Error(`Expected ${v}<${n}ms`);}});
async function t(){
  const s=Date.now();await new Promise(r=>setTimeout(r,50));const e=Date.now()-s;
  expect(e).toBeLessThan(45);
}
t().catch(e=>{console.error(e.message);process.exit(1);});
