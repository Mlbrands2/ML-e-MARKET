export function generateIsoDate(normalDate){
    const dateObject = new Date(normalDate); // This converts "2024-11-17" into a valid Date object
    const isoFormattedDate = dateObject.toISOString();
    return isoFormattedDate;
    
} 