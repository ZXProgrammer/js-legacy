async function searchAnimal() {
    const apiKey = 'uIx9DLyGrfhW1jTiu2HFNw==qoN4D2jv1NK5BCHE';
    const name = document.getElementById('animalInput').value.trim().toLowerCase();
    const output = document.getElementById('animalOutput');
    output.innerHTML = '';

    if (!name) {
        output.innerHTML = 'Please enter an animal name.';
        return;
    }

    try {
        const res = await fetch(
            `https://api.api-ninjas.com/v1/animals?name=${encodeURIComponent(name)}`, 
            { headers: { 'X-Api-Key': apiKey } }
        );
        const data = await res.json();

        if (!data.length) {
            output.innerHTML = 'Animal not found.';
            return;
        }

        const animal = data[0];
        const traits = animal.characteristics || {};

        const wikiRes = await fetch(
            `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(name)}`
        );
        const wikiData = await wikiRes.json();
        const imageUrl = wikiData.thumbnail?.source || '';
        const description = wikiData.extract || 'No description available.';

        output.innerHTML = `
        <div class="animal-card">
            ${imageUrl ? `<img src="${imageUrl}" alt="${animal.name}">` : ''}
            <h2>${animal.name}</h2>
            <p><strong>Habitat:</strong> ${traits.habitat || 'N/A'}</p>
            <p><strong>Diet:</strong> ${traits.diet || 'N/A'}</p>
            <p><strong>Location:</strong> ${animal.locations?.join(', ') || 'N/A'}</p>
            <p><strong>Description:</strong> ${description}</p>
        </div>
        `;
    } catch (err) {
        output.innerHTML = 'Error loading data.';
    }
}
