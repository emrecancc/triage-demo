const assert=require("assert");
async function t(){
  const s=Date.now();await new Promise(r=>setTimeout(r,50));const e=Date.now()-s;
  assert.ok(e<40,`Expected<40ms got ${e}ms`);
}
t().catch(e=>{console.error(e.message);process.exit(1);});
