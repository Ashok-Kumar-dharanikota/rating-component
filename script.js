let selectedNum = '';

function selectNumber(div) {

    const allRatesDivs = document.querySelectorAll('.rates');
    allRatesDivs.forEach(rateDiv => {
        rateDiv.style.backgroundColor = 'hsla(217, 12%, 63%, 0.118)';  
    });

    
    selectedNum = div.textContent;
    div.style.backgroundColor = 'hsl(216, 12%, 54%)';
    div.style.color = 'white';


}

document.querySelector("button").addEventListener("click", function() {

    document.getElementById("selected").textContent = "You selected " + selectedNum + " out of 5";

    document.getElementById("preview-card").style.display = 'none';

    document.getElementById("thank-you").style.display = 'block';
});
