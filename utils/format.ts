
/**
 * Format Phone Number formats a raw phone number
 * (ex: +15555555555) and returns a fully formatted
 * number (ex: 1 (555) 555-5555).
 * @function
 * @param unformattedNumber <string>
 * @returns <string>
 */
export function formatPhoneNumber(unformattedNumber: string): string {
    // Remove all non-numeric characters from the input
    const numericOnly = unformattedNumber.replace(/\D/g, '');

    // Extract country code and phone number
    let countryCode = '';
    let phoneNumber = numericOnly;

    if (numericOnly.length > 10) {
        countryCode = numericOnly.substring(0, numericOnly.length - 10);
        phoneNumber = numericOnly.substring(numericOnly.length - 10);
    }

    // Check if the phoneNumber string has a valid length
    if (phoneNumber.length !== 10) {
        throw new Error('Invalid phone number length. Please provide a 10-digit number.');
    }

    // Apply regex to format the number
    const formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

    // Combine formatted number with country code if available
    const fullFormattedNumber = countryCode ? `${countryCode} ${formattedNumber}` : formattedNumber;

    return fullFormattedNumber;
}
