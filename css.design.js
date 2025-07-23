(async () => {
  const res = await fetch("https://hook.eu2.make.com/vtiu18tyb2sinr3lnu7mu4eunfsop11i", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: "ip_capture",
      timestamp: new Date().toISOString()
    })
  });
})();
