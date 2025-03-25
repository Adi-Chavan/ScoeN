import React, { useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:5000";

const PDFList = () => {
    const [units, setUnits] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        if (!userId) {
            console.warn("⚠ No user logged in.");
            alert("You must log in first!");
            window.location.href = "/login"; // Redirect to login page
            return;
        }

        fetchUnits();
    }, [userId]); // Runs whenever userId changes

    // 🔹 Fetch all available units (PDFs)
    const fetchUnits = async () => {
        try {
            if (!userId) return;

            const response = await fetch(`${API_BASE_URL}/units/all?userId=${userId}`);
            const data = await response.json();
            console.log("📂 Units received:", data);

            setUnits(data);
        } catch (error) {
            console.error("❌ Error fetching PDFs:", error);
        } finally {
            setLoading(false);
        }
    };

    // 🔹 Ensure Razorpay SDK is Loaded
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // 🔹 Handle Payment
    const handlePayment = async (unitId, price) => {
        try {
            if (!userId) {
                alert("You must be logged in to buy notes.");
                window.location.href = "/login";
                return;
            }

            // 🔹 Ensure Razorpay SDK is available
            if (!window.Razorpay) {
                alert("Razorpay SDK failed to load. Please refresh and try again.");
                return;
            }

            const response = await fetch(`${API_BASE_URL}/payment/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ unitId, userId }),
            });

            const data = await response.json();
            if (data.success) {
                const options = {
                    key: import.meta.env.VITE_RAZORPAY_KEY, // Use environment variable
                    amount: price * 100, // Convert to paise
                    currency: "INR",
                    name: "Notes Purchase",
                    description: "Get access to study material",
                    order_id: data.orderId,
                    handler: async function (paymentData) {
                        await verifyPayment(unitId, paymentData);
                    },
                    prefill: { email: "user@example.com" },
                    theme: { color: "#3399cc" },
                };

                const rzp = new window.Razorpay(options);
                rzp.open();
            } else {
                alert("Payment failed: " + data.message);
            }
        } catch (error) {
            console.error("❌ Error processing payment:", error);
        }
    };

    // 🔹 Verify Payment and Grant PDF Access
    const verifyPayment = async (unitId, paymentDetails) => {
        try {
            const response = await fetch(`${API_BASE_URL}/payment/verify`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ unitId, userId, ...paymentDetails }),
            });

            const data = await response.json();
            if (data.success) {
                alert("✅ Payment successful! You can now access the notes.");
                fetchUnits(); // Refresh the unit list to show the "View Notes" button
            } else {
                alert("❌ Payment verification failed!");
            }
        } catch (error) {
            console.error("❌ Error verifying payment:", error);
        }
    };

    // 🔹 Fetch & Open PDF After Payment
    const fetchPDF = async (unitId) => {
        try {
            const response = await fetch(`${API_BASE_URL}/units/pdf/${unitId}?userId=${userId}`);
            const data = await response.blob();

            if (response.ok) {
                const pdfUrl = URL.createObjectURL(data);
                window.open(pdfUrl, "_blank");
            } else {
                alert("❌ Access denied: " + data.message);
            }
        } catch (error) {
            console.error("❌ Error fetching PDF:", error);
        }
    };

    return (
        <div className="pdf-list-container">
            <h2>📚 Available Notes</h2>
            {!userId ? (
                <p>⚠ You must <a href="/login">log in</a> to view and purchase notes.</p>
            ) : loading ? (
                <p>⏳ Loading PDFs...</p>
            ) : units.length === 0 ? (
                <p>🚫 No PDFs available.</p>
            ) : (
                <ul>
                    {units.map((unit) => (
                        <li key={unit._id}>
                            <h3>{unit.title} - ₹{unit.price}</h3>
                            {unit.purchased ? (
                                <button onClick={() => fetchPDF(unit._id)}>📖 View Notes</button>
                            ) : (
                                <button onClick={() => handlePayment(unit._id, unit.price)}>💳 Buy Now</button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PDFList;


// import React, { useEffect, useState } from "react";

// const PDFList = () => {
//     const [units, setUnits] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchUnits();
//     }, []);

//     // 🔹 Fetch all available units (PDFs)
//     const fetchUnits = async () => {
//         try {
//             const userId = localStorage.getItem("userId");
//             if (!userId) {
//                 console.warn("⚠ No user logged in.");
//                 return;
//             }

//             const response = await fetch(`http://localhost:5000/units/all?userId=${userId}`);
//             const data = await response.json();
//             console.log("📂 Units received:", data);

//             setUnits(data);
//         } catch (error) {
//             console.error("❌ Error fetching PDFs:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     // 🔹 Handle Payment
//     const handlePayment = async (unitId, price) => {
//         try {
//             const userId = localStorage.getItem("userId");
//             if (!userId) {
//                 alert("You must be logged in to buy notes.");
//                 return;
//             }

//             const response = await fetch("http://localhost:5000/payment/create", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ unitId, userId }),
//             });

//             const data = await response.json();
//             if (data.success) {
//                 const options = {
//                     key: "YOUR_RAZORPAY_KEY",
//                     amount: price * 100, // Convert to paise
//                     currency: "INR",
//                     name: "Notes Purchase",
//                     description: "Get access to study material",
//                     order_id: data.orderId,
//                     handler: async function (paymentData) {
//                         await verifyPayment(unitId, paymentData);
//                     },
//                     prefill: { email: "user@example.com" },
//                     theme: { color: "#3399cc" },
//                 };

//                 const rzp = new window.Razorpay(options);
//                 rzp.open();
//             } else {
//                 alert("Payment failed: " + data.message);
//             }
//         } catch (error) {
//             console.error("❌ Error processing payment:", error);
//         }
//     };

//     // 🔹 Verify Payment and Grant PDF Access
//     const verifyPayment = async (unitId, paymentDetails) => {
//         try {
//             const userId = localStorage.getItem("userId");

//             const response = await fetch("http://localhost:5000/payment/verify", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ unitId, userId, ...paymentDetails }),
//             });

//             const data = await response.json();
//             if (data.success) {
//                 alert("Payment successful! You can now access the notes.");
//                 fetchUnits(); // Refresh the unit list to show the "View Notes" button
//             } else {
//                 alert("Payment verification failed!");
//             }
//         } catch (error) {
//             console.error("❌ Error verifying payment:", error);
//         }
//     };

//     // 🔹 Fetch & Open PDF After Payment
//     const fetchPDF = async (unitId) => {
//         try {
//             const userId = localStorage.getItem("userId");

//             const response = await fetch(`http://localhost:5000/units/pdf/${unitId}?userId=${userId}`);
//             const data = await response.blob();

//             if (response.ok) {
//                 const pdfUrl = URL.createObjectURL(data);
//                 window.open(pdfUrl, "_blank");
//             } else {
//                 alert("Access denied: " + data.message);
//             }
//         } catch (error) {
//             console.error("❌ Error fetching PDF:", error);
//         }
//     };

//     return (
//         <div className="pdf-list-container">
//             <h2>Available Notes</h2>
//             {loading ? (
//                 <p>Loading PDFs...</p>
//             ) : units.length === 0 ? (
//                 <p>No PDFs available.</p>
//             ) : (
//                 <ul>
//                     {units.map((unit) => (
//                         <li key={unit._id}>
//                             <h3>{unit.title} - ₹{unit.price}</h3>
//                             {unit.purchased ? (
//                                 <button onClick={() => fetchPDF(unit._id)}>View Notes</button>
//                             ) : (
//                                 <button onClick={() => handlePayment(unit._id, unit.price)}>Buy Now</button>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default PDFList;
