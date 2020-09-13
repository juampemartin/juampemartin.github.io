   // ------- Submit Form Script -------//
    let workouts = [];
        // Example {id:1592304983049, workout: 'Smolov', MR: 12}
        const addWorkout = (ev)=>{
            ev.preventDefault();  //To stop the form submitting
            let exercise = {
                id:Date.now(),
                title: document.getElementById('exercise').value,
                mr: document.getElementById('max-repetitions').value,
                date: document.getElementById('start-date').value
            }
            workouts.push(exercise);
            document.querySelector('form').reset();

            //For display purposes only
            console.log('added' , { workouts } );
            //saving to localStorage
            localStorage.setItem('MyWorkoutList', JSON.stringify(workouts) );
            //Sending the data to the server
        }
        document.addEventListener('DOMContentLoaded', () => {
            document.getElementById('wo-btn').addEventListener('click', addWorkout);
        });