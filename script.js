const timezones = [
    { name: "New York (EST)", offset: -5 },
    { name: "London (GMT)", offset: 0 },
    { name: "Berlin (CET)", offset: 1 },
    { name: "Tokyo (JST)", offset: 9 },
    { name: "Sydney (AEDT)", offset: 11 },
  ];
  
  function updateTime() {
    const container = document.getElementById("timezones");
    container.innerHTML = ""; // Clear previous content
  
    timezones.forEach(({ name, offset }) => {
      const currentTime = new Date();
      const utcTime = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
      const timezoneTime = new Date(utcTime + offset * 3600000);
  
      const timezoneElement = document.createElement("div");
      timezoneElement.className = "timezone";
      timezoneElement.innerHTML = `
        <h2>${name}</h2>
        <p>${timezoneTime.toLocaleTimeString()}</p>
      `;
  
      container.appendChild(timezoneElement);
    });
  }
  
  // Update every second
  setInterval(updateTime, 1000);
  updateTime();
  