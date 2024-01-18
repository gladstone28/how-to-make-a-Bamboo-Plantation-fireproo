function showDetails(methodNumber) {
    const details = document.getElementById('details');
    let content = '';

    switch (methodNumber) {
        case 1:
            content = `<p>Example of Regular Maintenance: A bamboo plantation in China employs workers to regularly inspect and clean...</p>
                       <p>Estimated Cost: $500 to $2000 per month</p>`;
            break;
        case 2:
            content = `<p>Example of Irrigation and Moisture Control: A plantation in Thailand uses a drip irrigation system...</p>
                       <p>Estimated Cost: $1500 to $5000</p>`;
            break;
            // Add cases for other methods        
        case 3:
            content = `<p>Example of Firebreaks: In Australia, a bamboo farm creates firebreaks by clearing a 10-meter wide strip of land...</p>
                       <p>Estimated Cost: $1000 to $3000</p>`;
            break;
        case 4:
            content = `<p>Example of Choice of Species: A plantation in Brazil might choose to cultivate Bambusa tulda...</p>
                       <p>Estimated Cost: 5-10% more expensive than standard species</p>`;
            break;
        case 5:
            content = `<p>Example of Chemical Treatments: In the United States, some bamboo growers apply fire-retardant chemicals...</p>
                       <p>Estimated Cost: $500 to $2000 annually</p>`;
            break;
        case 6:
            content = `<p>Example of Controlled Burning: In South Africa, forest managers conduct controlled burns in the underbrush...</p>
                       <p>Estimated Cost: $1000 to $5000 per burn</p>`;
            break;
            // Add cases for other methods
        case 7:
            content = `<p>Example of Monitoring and Early Detection Systems: A plantation in Indonesia installs smoke detectors and thermal cameras...</p>
                       <p>Estimated Cost: $2000 to $10000</p>`;
            break;
        case 8:
            content = `<p>Example of Training and Preparedness: In Spain, bamboo plantation workers receive regular training on fire safety...</p>
                       <p>Estimated Cost: $500 to $2000 annually</p>`;
            break;
        case 9:
            content = `<p>Example of Community Involvement: A community near a bamboo plantation in India organizes workshops to educate locals...</p>
                       <p>Estimated Cost: $100 to $1000 per event</p>`;
            break;
        case 10:
            content = `<p>Example of Research and Adaptation: A research institute in Japan studies fire-resistant bamboo species...</p>
                       <p>Estimated Cost: Variable, up to several thousand dollars</p>`;
            break;



    }

    details.innerHTML = content;
}
