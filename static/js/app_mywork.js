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


function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
    
    // Get the samples field

    const samples = data.samples;

    // Filter the samples for the object with the desired sample number

    const resultObj = samples.filter(samples => samples.id == sample)
    
    // extract 1st row of the resultobj
  
    const result = resultObj[0];

    // Get the otu_ids, otu_labels, and sample_values, and store them in Const

    const otu_ids = result.otu_ids;
    const otu_labels = result.otu_labels;
    const sample_values = result.sample_values;

    // Build a Bubble Chart

    const Data_bubblechart = [
                          {
                            x: otu_ids,
                            y: sample_values,
                            text: otu_labels,
                            mode: "markers",
                            marker: {
                                      size: sample_values,
                                      color: otu_ids,
                                      colorscale: "Portland",
                                      type : "heatmap"
                            }
                          }
                        ];

    const Layout_bubblechart = {
                          title: "Bacteria Cultures Per Sample",
                          xaxis: { title: "OTU ID"},
                          yaxis: { title: "Number of bacteries" },
                          hovermode: "closest"
                        };

    // Render the Bubble Chart

    Plotly.newPlot("bubble", Data_bubblechart, Layout_bubblechart);

        
     // For the Bar Chart, map the otu_ids to a list of strings for your yticks
  // Don't forget to slice and reverse the input data appropriately

    const yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();

    // Build a Bar Chart

    const Data_barchart = [
                            {
                            // Don't forget to slice and reverse the input data appropriately
                              x: sample_values.slice(0, 10).reverse(),
                              y: yticks,
                              text: otu_labels.slice(0, 10).reverse(),

                              type: "bar",
                              orientation: "h"
                            }
                          ];

    const Layout_barchart = {
                            title: "Top 10 Bacteria Cultures Found",
                            xaxis: { title: "Number o bacteries" }
                            };

  // Render the Bar Chart

  Plotly.newPlot("bar", Data_barchart, Layout_barchart);



    // checks in console

    console.log(`sample buildCharts is ${sample}`);

    console.log(`result of buildCharts is `);
    console.log(result);

    // console.log(`result of panel is `);
    // console.log(panel);
    });
  }

// check functin  buildCharts. test with 940

buildCharts(940)




// Function to run on page load

function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {
  
    // Get the names field

    const Names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset` 
    // select id="selDataset" onchange="optionChanged(this.value)"></select>

    const arrow = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.

    for (let i = 0; i < Names.length; i++) {
      arrow.append("option").text(Names[i]).property("value", Names[i]);
      }
    
    // Get the first sample from the list

    const choice = Names[0];

    // Build charts and metadata panel with the first sample

    buildCharts(choice);
    buildMetadata(choice);
  });
}


function optionChanged(newSample) {
  
  // Build charts and metadata panel each time a new sample is selected

  buildCharts(newSample);
  buildMetadata(newSample);
}

init();