export default async function handler(req, res) {
    try {
        // Отримуємо IP клієнта
        const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

        // Запит до ipinfo.io з реальним IP
        const response = await fetch(`https://ipinfo.io/${clientIp}/json?token=ff259f48889575`);
        if (!response.ok) {
            throw new Error("Failed to fetch geolocation data");
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error("Error fetching geolocation data:", error);
        res.status(500).json({ error: "Failed to fetch geolocation data" });
    }
}

