import React, { useEffect } from 'react'

const Geo_Location = () => {
    useEffect(() => {
        const getGeoDetails = async () => {
            const url = "https://json.apiastro.com/geo-details";
            const data = {
                location: "Hyderabad"
            };

            const headers = {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjliODFhMWY5MDVmY2FhNjY3OWNhOTA3YzBjY2Q1NDJmYTc1Y2IwZDE4NjVjYzdmYjBiODlkMDZkNWNmOTgwMTMzOTY0YWVmYzhiYWYyNmUiLCJpYXQiOjE3MzY3NTE0MzMuMzUzNDYsIm5iZiI6MTczNjc1MTQzMy4zNTM0NjIsImV4cCI6MTc2ODI4NzQzMy4zNDEzOTEsInN1YiI6IjUiLCJzY29wZXMiOltdfQ.mmKgWikROqi8X1doub70cX-JSkM_3Bca3WbGA7XdMbheR3PS7H83oi7o4ioD698BFAxz3gzw7kFPH7s2li0rqxIL3C-wvPK5x2AevBRfsX7kUDp9VZ4BrCloXldXz1-egNm-zuY0-qrr_Bmh01X1HivjBGdV_0_76Q1M1W0gGWLsrIPE286a-V2RiGsFv4UuI0dp0tK8KntBicpAI7RoEz1UsIOooxsSWE-wPZVAAaYRxTe0W5KR2zo0xEmKGzvh5fIhtGz0KTpUbcyZ2M_0EqwF-IZjv8N63OhfvfuI6n3kJeVYmDAK8VRjbpqRCAsQQqaMnglEoWyCb4w_8YbqS4Q0Y-myfu_U3X7ycSTe_oWw8rwfqFfKZ8SQuz0Ku1MUheo0FjmTeTvJvyGnFIExdGekKYlPMi6RRR_m-VK_9gljJbIGGksUPtMiiQ7rFjoKkVoEhDw8g3lfiYUAnTuNZp8QZBYHlsSQ7TY5VH45_NI5mciw9SQC-HbZ6xGSA5xN75-w6hYxpCpwnsqo-DxzIRJ5U2SN6VmOSBr_haEb8vfnC2PyGgzO8rU-Vav3gVUNqitoJz_-FPOec9uc9XP98Fo-5z45WGt-cjTsOekvcvQ1atvi1AMniNjqMmfBPYqPdfPcrlgIk6eP3tUQ0ZyKGyhk046V_l2jsFwVpVN_LIY"  // Use your actual token here
            };

            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    console.log(result); // Handle successful response
                } else {
                    console.log('API error:', result.message); // Handle API errors
                }
            } catch (error) {
                console.error('Request failed', error); // Handle network errors
            }
        };
        getGeoDetails();
    }, [])

    return (
        <div>Geo_Location</div>
    )
}

export default Geo_Location