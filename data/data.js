export async function getData() {
    const apiUrl =
      "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }