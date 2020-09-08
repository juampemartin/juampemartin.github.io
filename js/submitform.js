   // ------- Submit Form Script -------//

    let workouts = [];
        // example {id:1592304983049, workout: 'Smolov', MR: 12}
        const addWorkout = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let exercise = {
                // id: Date.now(),
                title: document.getElementById('exercise').value,
                mr: document.getElementById('max-repetitions').value,
                date: document.getElementById('start-date').value
            }

            workouts.push(exercise);
            document.querySelector('form').reset();

            //for display purposes only
            console.log('added' , {workouts} );
            let pre = document.querySelector('#msg pre');
            //saving to localStorage
            // localStorage.setItem('MyWorkoutList', JSON.stringify(workouts) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('wo-btn').addEventListener('click', addWorkout);
        });