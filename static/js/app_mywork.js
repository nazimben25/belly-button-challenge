// Build the metadata panel

function buildMetadata(sample) {

  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the metadata field

    const metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    const resultObj = metadata.filter(metaObj => metaObj.id == sample)
    
    // extract 1st row of the resultobj
  
    const result = resultObj[0];

    // Use d3 to select the panel with id of `#sample-metadata` 
    //div id="sample-metadata" class="card-body"></div

    const panel = d3.select("#sample-metadata");

    // Use `.html("")` to clear any existing metadata

    panel.html("");

    // Append key-value pairs to the panel
    // for loop on the obj panel, retriec key + value and append them to object h6 in the panel 
    // use h6 for the size in line with the example of instructions

    for (let [key, value] of Object.entries(result)) 

      // print in consol to check the values expected
      {console.log(`content of the panel is ${key}: ${value}`)
        panel.append("h6").text(`${key}: ${value}`);}

    

    // console controls
    console.log(`metadata is `);
    console.log(metadata);

    console.log(`result of metadata is `);
    console.log(result);

    console.log(`result of panel is `);
    console.log(panel);
  });
    
}

// check functin  buildMetadata. test with 940
buildMetadata(940);

// // function to build both charts
// function buildCharts(sample) {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the samples field


//     // Filter the samples for the object with the desired sample number


//     // Get the otu_ids, otu_labels, and sample_values


//     // Build a Bubble Chart


//     // Render the Bubble Chart


//     // For the Bar Chart, map the otu_ids to a list of strings for your yticks
//   // Don't forget to slice and reverse the input data appropriately

//     // Build a Bar Chart


//     // Render the Bar Chart

//   });
// }

// // Function to run on page load
// function init() {
//   d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

//     // Get the names field


//     // Use d3 to select the dropdown with id of `#selDataset`


//     // Use the list of sample names to populate the select options
//     // Hint: Inside a loop, you will need to use d3 to append a new
//     // option for each sample name.


//     // Get the first sample from the list


//     // Build charts and metadata panel with the first sample

//   });
// }

// // Function for event listener
// function optionChanged(newSample) {
//   // Build charts and metadata panel each time a new sample is selected

// }

// // Initialize the dashboard
// init();
