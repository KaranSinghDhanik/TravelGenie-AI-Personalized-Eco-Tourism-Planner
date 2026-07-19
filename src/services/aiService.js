import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function generateItinerary(formData) {
  const token = localStorage.getItem("travelgenie_token");

  const response = await axios.post(
    `${API_BASE_URL}/ai/itinerary`,
    {
      destination: formData.destination,
      days: Number(formData.duration),
      budget: formData.budget,
      travelStyle: formData.style,
      interests: formData.interests,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data.itinerary;
}