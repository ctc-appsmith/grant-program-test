export default {
    signIn: () => {
        console.log('Starting sign-in process');

        return sign_in.run()
            .then(data => {
                console.log('Sign-in successful:', data);
                
                // Check if access token is present in the response data
                if (data.access_token) {
                    // Store the access token using storeValue
                    storeValue('accessToken', data.access_token);
                    console.log('Access token stored:', data.access_token);
                    
                    // Navigate to AdminPage
                    navigateTo('AdminPage');
                    console.log('Navigated to AdminPage');
                } else {
                    console.error('Access token not found in response');
                    showAlert('Sign-in failed. Access token not found.', 'error');
                }
            })
            .catch(error => {
                console.error('Sign-in failed:', error);
                
                // Check if the error is related to the token storage
                if (error.response && error.response.data) {
                    console.error('Error response:', error.response.data);
                    showAlert('Sign-in failed. Error storing access token.', 'error');
                } else {
                    showAlert('Sign-in failed. Please check your credentials.', 'error');
                }
            });
    },
}