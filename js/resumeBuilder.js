var bio = {
    "name": "Karl Haiden",
    "role": "Sr Project/Program Manager",
    "contacts": {
            "mobile": "630-932-6840",
            "email": "kh1623@att.com",
            "github" : "chaz0468",
            "location": "Lombard, Illinois"
        },
    "welcome": "Hello and welcome to my Resume page",
    "skills": [
        "PMP Certified",
        "10 years experience working Business Cases",
        "excel experience",
        "Network background"
    ],
    "resumePic": "images/charlie.jpg"
};

var education = {
    "schools": [
        { 
            "name":"Devry University",
            "location" : "Chicago, Illinois", 
            "degree": "AA",
            "majors" : "Electronics",
            "dates": "1993 - 1996",
            "url" : "www.devry.edu" 
        },
        {
            "name":"IIL",
            "location" : "Hoffman Estates, Illinois",
            "degree": "PMP Certified",
            "majors" : "Project Management",
            "dates": "2001 - 2015",
            "url" : "www.devry.edu"
        }
    ],

    "onlineCourses" : [
        {
            "title" : "Front End Web Developer",
            "school" : "Udacity",
            "dates" : "January 2015",
            "url" : "www.udacity.com/course/nd001"
        }
    ]
};

var work = {
    "jobs" : [
        {
            "employer" : "AT&T",
            "title" : "Sr Project / Program Manager",
            "location" : "Lombard, Il",
            "dates" : "Dec 2003 - Present",
            "description" : "Provide Corporate Program Office financial direction and support for projects prioritized adn approvided by the Portfolio Administration Office." 
        },
        {
            "employer" : "AT&T",
            "title" : "Area Manager Strategist",
            "location" : "Hoffman Estates, Il",
            "dates" : "Oct 2000 - Dec 2003",
            "description" : "Direct and develop Network strategies and initiatives for service assurance and reliability integration across the 13 state footprint" 
        }
    ]
};

var projects = {
    "projects" : [
        {
            "title" : "Roof",
            "dates" : "Sept 2012",
            "location" : "Wisconsin",
            "description" : "Repaired my parent's roof",
            "images" : ["images/wisconsin038.jpg","images/wisconsin044.jpg","images/wisconsin059.jpg"]
        },
        {
            "title" : "nascar",
            "dates" : "May 2014",
            "description" : "Driving Race Cars",
            "images" : ["images/nascar_charlie.jpg"]  
        }
    ]
};

bio.display = function() {

    var formattedName = 
    HTMLheaderName.replace("%data%", bio.name);
   
    var formattedRole = 
    HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    var formattedMobile =
    HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = 
    HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = 
    HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);    

    var formattedLocation = 
    HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedBioPic = 
    HTMLbioPic.replace("%data%", bio.resumePic);
    $("#header").append(formattedBioPic);

    var formattedWelcomeMessage = 
    HTMLWelcomeMsg.replace("%data%", bio.welcome);
    $("#header").append(formattedWelcomeMessage);


    if (bio.skills.length > 0)
    {
        $("#header").append(HTMLskillsStart);

        for (skills in bio.skills){

            var formattedSkill=HTMLskills.replace("%data%", bio.skills[skills]);
            $("#skills").append(formattedSkill);
        }

    };
}

bio.display();

education.display = function() {

    for (myschool in education.schools) {
         
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[myschool].name);
        $(".education-entry:last").append(formattedSchoolName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[myschool].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[myschool].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[myschool].location);
        $(".education-entry:last").append(formattedLocation);

         var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[myschool].majors);
         $(".education-entry:last").append(formattedMajor);
        
   }

$("#education").append(HTMLonlineClasses);

    for (onlineschool in education.onlineCourses) {
        
        $("#education").append(HTMLschoolStart);

        var HTMLonlineTitle = '<a href="#">%data%';
        var formattedonlineTitleName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineschool].title);
        $(".education-entry:last").append(formattedonlineTitleName);

        var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineschool].school);
        $(".education-entry:last").append(formattedonlineSchool);

        var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineschool].dates);
        $(".education-entry:last").append(formattedonlineDates);

        var formattedonlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineschool].url);
        $(".education-entry:last").append(formattedonlineUrl);

    }
}

education.display();


work.display = function(){
    for (job in work.jobs)
        {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
    }
}

work.display();

projects.display = function() {

    for (project in projects.projects) {
    
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

    
        if (projects.projects[project].images.length > 0) {
        
           for (image in projects.projects[project].images) {
               var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
               $(".project-entry:last").append(formattedImage);

            }

        }

    }
    
}

projects.display();


$("#mapDiv").append(googleMap);