export default {
	signIn: () => {
		return sign_in.run()
			.then(data => {
				delete data.user;
				Object.keys(data).forEach(i => {
					storeValue(i, data[i]);
				});
			})
		  .then(() => navigateTo('AdminPage'))
	},
}