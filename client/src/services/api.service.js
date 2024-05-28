const getPrayerData = async (selectedCity) => {
  try {
    const response = await fetch(`https://prayer-serv.onrender.com/api/${selectedCity}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getPrayerData;
