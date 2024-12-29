// Helper function to handle errors
export const handleError = (fnName, res, error, message = "Internal server error") => {
    console.error(`Error in function : ${fnName}: `, error);
    return res.status(500).json({ success: false, message, error: error.message });
};