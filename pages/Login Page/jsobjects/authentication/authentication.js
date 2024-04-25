export default {
    signIn: () => {
        return sign_in.run()
            .then(data => {
                delete data.user;
                Object.keys(data).forEach(i => {
                    sessionStorage.setItem(i, data[i]); // Store in sessionStorage
                });
                navigateTo('AdminPage');
            })
            .catch(error => {
                console.error('Sign-in failed:', error);
                // Handle error and provide feedback to the user
                console.log('Sign-in failed. Please check your credentials.');
            });
    },
}