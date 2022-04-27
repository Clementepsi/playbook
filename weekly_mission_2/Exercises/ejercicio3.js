   class repo {
    constructor(name, author, language,numberOfCommits,stars,forks,issues_open,issues_close){
      this.name = name
      this.author = author
      this.language = language
      this.numberOfCommits = numberOfCommits
      this.stars = stars
      this.forks = forks
      this.issues_open = issues_open
      this.issues_close = issues_close
    }
    getinfo(){
      return`Nombre del repo:${this.name}`
    }
    sumar(getTotalIssues){
      return getTotalIssues()
    }
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
  }

  const carlorepo = new repo ("LaunchX","carlogilmar","JavaScript",100,199,299,10,10,)
   console.log(carlorepo.getInfo())
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())