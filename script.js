function yesResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>I love you!</span> You make me the happiest person!';
    responseMessage.style.display = 'block';
  }
  
  function noResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>Aww...</span> I’ll keep trying 🙄';
    responseMessage.style.display = 'block';
  }
  