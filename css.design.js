(async () => {
  const selectedStrategies = window.selectedStrategies || [];
  const weights = window.selectedWeights || [];
  const email = window.customerEmail || "Not Logged In";

  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const ipData = await res.json();

    const payload = {
      email,
      strategies: selectedStrategies.join(', '),
      weights: weights.join(', '),
      timestamp: new Date().toISOString(),
      ip: ipData.ip || "not captured"
    };

    console.log("Sending to Make:", payload);

    await fetch("https://hook.eu2.make.com/vtiu18tyb2sinr3lnu7mu4eunfsop11i", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("IP logging failed", err);
  }
})();
