d3.json("static/data/day_delay_prediction.json", function(response) {
    console.log(response);
    appendData(response);
});

function appendData(response) {
    var mainContainer = document.getElementById("table");
    var HTML = "<div class=\"row\"><div class=\"col-md-12\"><h4><b>Delay Predictor for -2 / + 4 days</b></h4><div class=\"tg-wrap\"><table style=\"border-collapse: collapse; border: 1px solid; width: 100%;\"><tr><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Description<center></b></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>-2 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>-1 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Selected Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>+1 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>+2 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>+3 Day</b></center></td><td style=\"border: 2px solid; background-color: lightblue\"><b><center>+3 Day</b></center></td></tr>"
    HTML += "<tr><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Departure Dates</b></center></td>"
    for (var i = 0; i < 7; i++) {
        //console.log(response[i].dep_days);
        if (i == 2)
        {
            HTML += "<td style=\"border: 2px solid; background-color: orange;\"><center><i>"+response[i].dep_days+"</i></center></td>";
        }
        else
        {
            HTML += "<td style=\"border: 2px solid;\"><center><i>"+response[i].dep_days+"</i></center></td>";
        }
    }

    HTML += "</tr><tr><td style=\"border: 2px solid; background-color: lightblue\"><b><center>Delay Probability</b></center></td>"
    for (var i = 0; i < 7; i++) {
        if (i == 2)
        {
            HTML += "<td style=\"border: 2px solid; background-color: orange;\"><center><i><span>"+response[i].prob_delay+"&#37;</span></i></center></td>";
        }
        else
        {
            HTML += "<td style=\"border: 2px solid;\"><center><i><span>"+response[i].prob_delay+"&#37;</span></i></center></td>";
        }
    }
    HTML += "</tr></table></div></div></div>";
    document.getElementById("table").innerHTML = HTML;
}
