const getPrayerData = async (selectedCity) => {
  try {
    const response = await fetch(`http://localhost:3000/${selectedCity}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getPrayerData;
