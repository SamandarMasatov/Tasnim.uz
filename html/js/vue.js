var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      course: "",
    },
    methods: {
		
	},
    async mounted(){
		
        //  Course Get All
		let course = await axios.get(`http://localhost:3000/course/getAll/`)
        let courseAll = course.data;
			console.log("Course all", courseAll)

        this.course = courseAll;


    
	 } 
	 })
  
