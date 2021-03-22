
function submitForm(event) {
    // Prevent form from trying to send to server
    event.preventDefault();
    // Grab element by ID
    const messageElement = document.getElementById("message");
    // Get values from form text inputs
    const name = document.getElementById("name").value;
    // Get values from form checkboxes
    function getPrices(service) {
        if label:checked {
            return = value;
            const BeatMix = document.getElementById("service").value;
            const BeatMix = parseInt(BeatMix);
        }

    }
    // const BeatMixOutput = parseInt(BeatMix);
    // const MixMasterOutput = parseInt(MixMaster);
    // const CollabOutput = parseInt(Collab);
    // const PromotionOutput = parseInt(Promotion);
    // const priceQuote = BeatMixOutput + MixMasterOutput + CollabOutput + PromotionOutput;

    // Set message to greet `name`
    messageElement.innerHTML = `Hello, ${name}. The estimate for the desired services is ${priceQuote}.`;
}
  