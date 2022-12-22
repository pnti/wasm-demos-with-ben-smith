
const w = 150, height= 150;

(async function start(){
    const response = await fetch('demo1.wasm');
    const moduleBytes = await response.arrayBuffer();

    const {module, instance} = await WebAssembly.instantiate(moduleBytes);
    const exports = instance.exports;
    const buffer = exports.mem.buffer;
    const canvasData = new Uint8Array(buffer, 0x10000, w*h*4);
})

