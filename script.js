const generateButton = document.getElementById('generateButton');
const resetButton = document.getElementById('resetButton');
const nameInput = document.getElementById('nameInput');
const resultDiv = document.getElementById('result');
const personalWuNameDisplay = document.getElementById('personalWuName');
const randomWuNameDisplay = document.getElementById('randomWuName');

// Wu-Tang name parts
const adjectives = [
    'Mystic', 'Fearless', 'Iron', 'Shadow', 'Golden', 'Mysterious',
    'Ruthless', 'Ghost', 'Silent', 'Savage', 'Wild', 'Dynamic'
];

const nouns = [
    'Warrior', 'Master', 'Ninja', 'Monk', 'Samurai', 'Assassin',
    'Chief', 'Overlord', 'Legend', 'Crane', 'Bandit', 'Emperor'
];

// Generate a random Wu-Tang name
function generateRandomWuName() {
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${randomAdj} ${randomNoun}`;
}

// Create a personalized Wu-Tang name based on input
function generatePersonalWuName(name) {
    const splitName = name.split(' ');
    const transformedParts = splitName.map(part => {
        const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
        return `${randomAdj} ${part}`;
    });
    return transformedParts.join(' ');
}

// Handle generate button click
generateButton.addEventListener('click', () => {
    const userName = nameInput.value.trim();

    if (userName) {
        const personalWuName = generatePersonalWuName(userName);
        const randomWuName = generateRandomWuName();

        personalWuNameDisplay.innerText = personalWuName;
        randomWuNameDisplay.innerText = randomWuName;

        resultDiv.classList.remove('hidden');
        resetButton.classList.remove('hidden');
    }
});

// Handle reset button click
resetButton.addEventListener('click', () => {
    nameInput.value = '';
    resultDiv.classList.add('hidden');
    resetButton.classList.add('hidden');
});
