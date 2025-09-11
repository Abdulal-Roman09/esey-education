"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function useUserRole(userId) {
  const [role, setRole] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    const fetchUserRole = async () => {
      try {
        setLoading(true);
        // API call for user role
        const { data } = await axios.get(`/api/users/${userId}`);
        setRole(data?.role || "student");

        // API call for location (using ipapi or custom API)
        const locationRes = await axios.get("https://ipapi.co/json/");
        setLocation(locationRes.data?.country_name || "Unknown");
      } catch (error) {
        console.error("Failed to fetch role/location:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [userId]);

  return { role, location, loading };
}
