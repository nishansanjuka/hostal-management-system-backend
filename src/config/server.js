module.exports = {
    port: process.env.PORT || 3000, // Set the server port, defaulting to 3000
    host: process.env.HOST || 'localhost', // Set the server host, defaulting to 'localhost'
    isProduction: process.env.NODE_ENV === 'production', // Determine if the server is running in production mode
    // Add any other server configuration options you need
};
