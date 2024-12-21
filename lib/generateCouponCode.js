// lib/generateCouponCode.js

export const generateCouponCode = (title, expiryDate) => {
    const formattedTitle = title.replace(/\s+/g, "").toUpperCase(); // Remove spaces and convert to uppercase
    const formattedDate = expiryDate.split("-").reverse().join(""); // Format date as DDMMYYYY
    return `${formattedTitle}${formattedDate}`; // Return the formatted coupon code
  };
  