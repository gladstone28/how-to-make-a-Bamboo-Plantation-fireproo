function showDetails(methodNumber) {
    const details = document.getElementById('details');
    let content = '';

    switch (methodNumber) {
        case 1:
            content = `<p>Regularly clearing the plantation of dry, dead, and fallen bamboo can significantly reduce the risk of fire. This involves pruning, cleaning, and removing any dry leaves and branches.<br><br>Example of Regular Maintenance: A bamboo plantation in China employs workers to regularly inspect and clean...</p>
            <p>Local Standards: Governed by regional forestry or agricultural guidelines.</p>
                       <p>International Standards: Best practices in forestry management by the FAO of the United Nations.</p>
                       <p>Estimated Cost: $500 to $2000 per month</p>`;
            break;
        case 2:
            content = `<p>Keeping the bamboo plantation well-irrigated can help in reducing fire risk. Bamboos with higher moisture content are less prone to catching fire. Implementing drip irrigation or sprinkler systems can be effective.<br><br>Example of Irrigation and Moisture Control: A plantation in Thailand uses a drip irrigation system...</p>
            <p>Local Standards: Water usage and irrigation standards are often dictated by local water authorities or agricultural bodies.</p>
                       <p>International Standards: Guidelines by the World Bank or the International Irrigation Management Institute (IIMI) may apply.</p>
                       <p>Estimated Cost: $1500 to $5000</p>`;
            break;
            // Add cases for other methods        
        case 3:
            content = `<p>Creating firebreaks around the plantation can help prevent the spread of fire. This can be achieved by clearing vegetation and creating barriers with non-flammable materials.<br><br>Example of Firebreaks: In Australia, a bamboo farm creates firebreaks by clearing a 10-meter wide strip of land...</p>
            <p>Local Standards: Local fire codes and forest management guidelines typically dictate the creation and maintenance of firebreaks.</p>
                       <p>International Standards: The International Wildland-Urban Interface Code (IWUIC) or guidelines by the UNISDR may be relevant.</p>
                       <p>Estimated Cost: $1000 to $3000</p>`;
            break;
        case 4:
            content = `<p>Some bamboo species are more resistant to fire than others. Choosing species that are less prone to burning can be a strategic decision in fireproofing your plantation.<br><br>Example of Choice of Species: A plantation in Brazil might choose to cultivate Bambusa tulda...</p>
            <p>Local Standards: Often determined by agricultural or environmental agencies based on regional biodiversity and environmental impact.</p>
                       <p>International Standards: The Convention on Biological Diversity (CBD) provides guidelines for the conservation and sustainable use of biological diversity.</p>
                       <p>Estimated Cost: 5-10% more expensive than standard species</p>`;
            break;
        case 5:
            content = `<p>Applying fire retardants to bamboo can also help in making them less susceptible to fire. However, this should be done considering the environmental impact and following local regulations.<br><br>Example of Chemical Treatments: In the United States, some bamboo growers apply fire-retardant chemicals...</p>
            <p>Local Standards: Subject to environmental protection laws and regulations on the usage of chemicals and pesticides.</p>
                       <p>International Standards: Guidelines from the International Code of Conduct on Pesticide Management are often applicable.</p>
                       <p>Estimated Cost: $500 to $2000 annually</p>`;
            break;
        case 6:
            content = `<p>In some cases, controlled or prescribed burning can be used to manage undergrowth and reduce the risk of uncontrolled wildfires. This needs to be done by professionals under strict conditions.<br><br>Example of Controlled Burning: In South Africa, forest managers conduct controlled burns in the underbrush...</p>
            <p>Local Standards: Controlled burning is usually regulated by local environmental and forestry agencies, requiring specific conditions and permits.</p>
                       <p>International Standards: Guidelines by the United Nations Framework Convention on Climate Change (UNFCCC) for emissions and environmental impact may be relevant.</p>
                       <p>Estimated Cost: $1000 to $5000 per burn</p>`;
            break;
            // Add cases for other methods
        case 7:
            content = `<p>Installing smoke detectors and monitoring systems can provide early warnings of fire, allowing for quicker response and control.<br><br>Example of Monitoring and Early Detection Systems: A plantation in Indonesia installs smoke detectors and thermal cameras...</p>
            <p>Local Standards: Determined by local fire codes and regulations, including the installation of smoke detectors and thermal cameras.</p>
                       <p>International Standards: ISO standards for safety and emergency management, like ISO 31000 for risk management, may apply.</p>
                       <p>Estimated Cost: $2000 to $10000</p>`;
            break;
        case 8:
            content = `<p>Ensuring that plantation workers and local fire services are trained and prepared to deal with fires can greatly reduce the damage caused by any outbreak.<br><br>Example of Training and Preparedness: In Spain, bamboo plantation workers receive regular training on fire safety...</p>
            <p>Local Standards: Local occupational health and safety regulations often cover training and preparedness for fire safety.</p>
                       <p>International Standards: ISO 45001 for Occupational Health and Safety Management Systems can provide guidance.</p>
                       <p>Estimated Cost: $500 to $2000 annually</p>`;
            break;
        case 9:
            content = `<p>Engaging the local community in fire prevention strategies can be beneficial. Educating locals about the risks and prevention methods can create a more vigilant environment.<br><br>Example of Community Involvement: A community near a bamboo plantation in India organizes workshops to educate locals...</p>
            <p>Local Standards: Typically governed by local government regulations on community engagement and education in fire prevention strategies.</p>
                       <p>International Standards: The UN Sustainable Development Goals (SDGs), particularly those related to community development and sustainable cities, offer a framework.</p>
                       <p>Estimated Cost: $100 to $1000 per event</p>`;
            break;
        case 10:
            content = `<p>Continuously researching and adapting to new methods and technologies for fire prevention can help in keeping the plantation safe over time.
            <p>Local Standards: Research standards are usually set by national science and technology policies and agencies.</p>
                       <p>International Standards: Guidelines by international research organizations such as the International Bamboo and Rattan Organisation (INBAR) can be referenced.</p>

It's important to note that completely fireproofing a bamboo plantation is challenging, but these measures can significantly reduce the risk and impact of fires.<br><br>Example of Research and Adaptation: A research institute in Japan studies fire-resistant bamboo species...</p>
                       <p>Estimated Cost: Variable, up to several thousand dollars</p>`;
            break;



    }

    details.innerHTML = content;
}