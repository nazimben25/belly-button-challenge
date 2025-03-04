# using Plotly, a JavaScript data visualization library
# build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site, which catalogs the microbes that colonize human navels


### belly-button-challenge
challenge module 14

OUTPUT OF THE CHALLENGE 14

1) repository organization
- to read the code 
    please refer to the JS file 
    belly-button-challenge\static\js\app_mywork.js

- to run the code
    please refer to HTML file 
    belly-button-challenge\index.html

- the original files provided are in directory : belly-button-challenge\Starter_Code



2) deployment in github page link is
https://nazimben25.github.io/belly-button-challenge/


3)  Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

4) instructions

Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

- Use sample_values as the values for the bar chart.
- Use otu_ids as the labels for the bar chart.
- Use otu_labels as the hovertext for the chart.

Create a bubble chart that displays each sample.

- Use otu_ids for the x values.
- Use sample_values for the y values.
- Use sample_values for the marker size.
- Use otu_ids for the marker colors.
- Use otu_labels for the text values.

Display the sample's metadata, i.e., an individual's demographic information.

Update all the plots when a new sample is selected. 



5) external help

chatgpt helped in code line 32
for (let [key, value] of Object.entries(result)) 
i was stucked to retreive data from result




