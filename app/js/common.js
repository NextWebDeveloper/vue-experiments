let app = new Vue ({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	},
	methods: {
		setMessage: function(event){
			this.message = event.target.value;
		}
	}
})

let app2 = new Vue ({
	el: '#app2',
	data: {
		message: 'Hello Vue!'
	},
	methods: {
		setMessage: function(event){
			this.message = event.target.value;
		}
	}
})
