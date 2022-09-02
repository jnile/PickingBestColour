const net = new brain.NeuralNetwork();


const data = [{ "input": { "r": 0, "g": 0, "b": 0 }, "output": [1] }, { "input": { "r": 1, "g": 1, "b": 1 }, "output": [0] }, { "input": { "r": 0.6547688472542412, "g": 0.1930274243651744, "b": 0.8415563411629658 }, "output": [1] }, { "input": { "r": 0.2552467171584014, "g": 0.09108215638576511, "b": 0.7619134881717313 }, "output": [1] }, { "input": { "r": 0.9563032540277905, "g": 0.7898583402433506, "b": 0.9124522020320378 }, "output": [0] }, { "input": { "r": 0.26533226683126165, "g": 0.9289996957670523, "b": 0.4830992024254268 }, "output": [0] }, { "input": { "r": 0.0921229729057913, "g": 0.08559983680757632, "b": 0.26362648653143794 }, "output": [1] }, { "input": { "r": 0.8047835345254846, "g": 0.17579956374942518, "b": 0.22972212442272366 }, "output": [1] }, { "input": { "r": 0.7592533629217875, "g": 0.4809842722912192, "b": 0.41424653839925196 }, "output": [0] }, { "input": { "r": 0.15560498413188562, "g": 0.29950976439658317, "b": 0.9117057929337218 }, "output": [1] }, { "input": { "r": 0.42106471118238353, "g": 0.8537898474584251, "b": 0.6208391411711738 }, "output": [0] }, { "input": { "r": 0.5058837858943226, "g": 0.6199094661799709, "b": 0.407005484686066 }, "output": [1] }, { "input": { "r": 0.003213281890675601, "g": 0.6823857754133582, "b": 0.8009554610643883 }, "output": [1] }, { "input": { "r": 0.6341439196490848, "g": 0.16064015322565894, "b": 0.18434579878882507 }, "output": [1] }, { "input": { "r": 0.2080565930478906, "g": 0.822694991217457, "b": 0.8132051489980388 }, "output": [0] }];

net.train(data);

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');
const whiteBtn = document.getElementById('white-btn');
const blackBtn = document.getElementById('black-btn');
const printBtn = document.getElementById('print-btn');

let color;
setRandomColor();

whiteBtn.addEventListener('click', () => {
    chooseColor(1)
});

blackBtn.addEventListener('click', () => {
    chooseColor(0)
});

printBtn.addEventListener('click', () => {
    console.log(JSON.stringify(data))
});

function chooseColor(value) {
    data.push({
        input: color,
        output: [value]
    });
    setRandomColor();
}

function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random()
    }

    const guess = net.run(color)[0];
    guessEl.style.color = guess > .5 ? "#FFF" : "#000";

    colorEl.style.backgroundColor =
        `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}