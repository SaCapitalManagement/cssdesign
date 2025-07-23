(async () => {
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json");
    const ipData = await ipRes.json();

    // Grab email and selected strategies from global window vars
    const email = window.customerEmail || "Not Logged In";
    const strategies = window.selectedStrategies || [];
    const weights = window.selectedWeights || [];

    const payload = {
      email,
      strategies: strategies.join(', '),
      weights: weights.join(', '),
      timestamp: new Date().toISOString(),
      ip: ipData.ip || "unknown"
    };

    await fetch("https://hook.eu2.make.com/vtiu18tyb2sinr3lnu7mu4eunfsop11i", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    console.error("IP logging failed:", err);
  }
})();
