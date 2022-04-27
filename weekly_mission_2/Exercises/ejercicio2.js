const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
 ]

 console.log(explorers)

 explorers.forEach(explorer => console.log(explorer.name))
 explorers.forEach(item => console.log(item.stack))
 const stacks = explorers.map(stac =>{ return stac.stack})
 const stackss = explorers.map(stackList => stackList.stack)
 console.log(stacks)
 
 const stacksContainingJs = explorers.filter((jss) => jss.stack.includes('js'))
 console.log(stacksContainingJs)

 const citys = explorers.find(explorerCdmx => explorerCdmx.city === 'CDMX')
 console.log(citys)
 const sumExercises = explorers.reduce((acc,exercisesSum) => acc + exercisesSum.exercises_completed,0)
 console.log(sumExercises)

 const areSomeTrue = explorers.some((b) =>  b.missions.frontend.exercisesFinished === true)
 console.log("Any explorer finished frontend exercises:  " + areSomeTrue)

 const onboardingFinished= explorers.every((bullet) => typeof bullet.missions.onboarding.isFinished === true)
 console.log("All de explorers finished Onboarding; " + onboardingFinished)