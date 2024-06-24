// Instantiating EasyHTTP
const http = new EasyHTTP;

// Get prototype method
http.get('https://jsonplaceholder.typicode.com/todos')

	// Resolving promise for response data
	.then(data => console.log(data))

	// Resolving promise for error
	.catch(err => console.log(err));

// Data for post request
const data = {
	userId: '1',
	id: '',
	title: 'selmonbhoi@gmail.com',
    completed:'false'
}

// Post prototype method
http.post(
	'https://jsonplaceholder.typicode.com/todos',
	data)

	// resolving promise for response data
	.then(data => console.log(data))

	// resolving promise for error
	.catch(err => console.log(err));


    // Update Post
http.put(
    'https://jsonplaceholder.typicode.com/users/2',
         data)
      
    // Resolving promise for response data
    .then(data => console.log(data))
      
    // Resolving promise for error
    .catch(err => console.log(err));